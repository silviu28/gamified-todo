import { FC, useState } from "react";
import { FlatList, Pressable, View } from "react-native";
import TaskContainer from "../atoms/TaskContainer";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { State, useStateSelector } from "@/app/store";
import { useNavigate } from "react-router-native";
import SkillContainer from "../atoms/SkillContainer";
import BottomBar from "../BottomBar";
import ToDoTask from "../atoms/ToDoTask";
import StatsContainer from "../atoms/StatsContainer";
import TierContainer from "../atoms/TierContainer";
import GradientBackground from "../GradientBackground";
import FadeInWrapper from "../FadeInWrapper";
import NoteView from "../atoms/Note";
import AddNoteForm from "../forms/AddNoteForm";
import { addNote } from "@/app/notesSlice";
import { assignTask, dismissOrCompleteTask, removeTask } from "@/app/tasksSlice";
import { levelSkills } from "@/app/skillsSlice";
import { addStats } from "@/app/tierSlice";
import Icon from "../icons";
import { Task } from "@/types";
import { db } from "@/db";
import { tasks, completedTasks as completedTasksTable, skillTasks, notes as notesTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { TopBar, Scroll, Content, Section, SectionHeading, SectionTitle, Divider, EmptyState, CancelText, AddNoteButton, AddNoteButtonText, SkillStack, RevisionBar, RevisionText, TContainer } from "../atoms";

const MainPage: FC = () => {
  const navigate = useNavigate();
  const { tasksToDo, completedTasks } = useSelector((state: State) => state.tasks);
  const skills = useSelector((state: State) => state.skills.allSkills);
  const notes = useSelector((state: State) => state.notes.allNotes);
  const tier = useSelector((state: State) => state.tier);
  const preferences = useSelector((state: State) => state.preferences);
  const [theme, accent] = useStateSelector((state) => [
    state.preferences.theme,
    state.preferences.accent
  ], shallowEqual);
  const dispatch = useDispatch();

  const [showNoteForm, setShowNoteForm] = useState<boolean>(false);

  const completeTask = async (task: Task) => {
    // retrieve all skills parents of task
    const affectedSkillTasks = await db
      .select()
      .from(skillTasks)
      .where(eq(skillTasks.taskId, task.id));

    db.transaction((tx) => {
      // if manually assigned then it repeats on schedule
      tx.update(tasks)
        .set({ manuallyAssigned: false })
        .where(eq(tasks.id, task.id));

      // set as complete
      tx.insert(completedTasksTable).values({
        taskId: task.id,
        multiplier: 1,
        completionDate: new Date(),
      });
    });

    const totalPts = affectedSkillTasks.reduce((sum, st) => sum + st.pts, 0);

    // update store state
    dispatch(dismissOrCompleteTask(task));
    dispatch(levelSkills(
      affectedSkillTasks.flatMap((st) => {
        const skill = skills.find((s) => s.id === st.skillId);
        return skill ? [{ skill, pts: st.pts }] : [];
      })
    ));
    dispatch(addStats({ taskCount: 1, pts: totalPts }));
  };

  const onAddNote = async (title: string, content: string) => {
    const [note] = await db.insert(notesTable)
      .values({ title, content })
      .returning();
      
    dispatch(addNote(note));
    setShowNoteForm(false);
  };

  return (
    <FadeInWrapper>
      <GradientBackground prefs={preferences}>
        <TopBar>
          <Pressable onPress={() => navigate("/me")}>
            <Icon.Person darkVariant={theme === "light"} />
          </Pressable>
          <Pressable onPress={() => navigate("/settings")}>
            <Icon.Settings darkVariant={theme === "light"} />
          </Pressable>
        </TopBar>
 
        <Scroll showsVerticalScrollIndicator={false}>
          <Content $theme={theme}>
            <View style={{ marginTop: 64 }}></View>
            {/* Quest list */}
            <Section>
              <SectionHeading>
                <Icon.Checkbox darkVariant={theme === "light"} />
                <SectionTitle $theme={theme}>Quest list</SectionTitle>
              </SectionHeading>
 
              {tasksToDo.length > 0 || completedTasks.length > 0 ? (
                <>
                  <FlatList
                    data={tasksToDo}
                    keyExtractor={(task) => task.name}
                    renderItem={({ item }) => (
                      <ToDoTask theme={theme} accent={accent} task={item} onCompletion={completeTask} />
                    )}
                    scrollEnabled={false}
                  />
                  {completedTasks.length > 0 && <Divider />}
                  <FlatList
                    data={completedTasks}
                    keyExtractor={(task) => task.name}
                    renderItem={({ item }) => <ToDoTask theme={theme} accent={accent} task={item} completed />}
                    scrollEnabled={false}
                  />
                </>
              ) : (
                <EmptyState>Nothing to do for now.</EmptyState>
              )}
            </Section>
 
            {/* Notes */}
            <Section>
              <SectionHeading>
                <Icon.Pencil darkVariant={theme === "light"} />
                <SectionTitle $theme={theme}>Notes</SectionTitle>
              </SectionHeading>
              <TContainer $theme={theme}>
              {showNoteForm && (
                <View>
                  <AddNoteForm onSubmit={onAddNote} />
                  <Pressable onPress={() => setShowNoteForm(false)}>
                    <CancelText>Cancel</CancelText>
                  </Pressable>
                </View>
              )}
 
              {notes.length > 0 ? (
                <FlatList
                  data={notes}
                  keyExtractor={(note) => note.title}
                  renderItem={({ item }) => <NoteView note={item} removable />}
                  scrollEnabled={false}
                />
              ) : (
                <EmptyState>No notes added.</EmptyState>
              )}
 
              {!showNoteForm && (
                <AddNoteButton $accent={accent} onPress={() => setShowNoteForm(true)}>
                  <AddNoteButtonText>+</AddNoteButtonText>
                </AddNoteButton>
              )}
              </TContainer>
            </Section>
 
            {/* Add quests */}
            <Section>
              <SectionHeading>
                <Icon.Info darkVariant={theme === "light"} />
                <SectionTitle $theme={theme}>Add quests</SectionTitle>
              </SectionHeading>
 
              {tasksToDo.length > 0 ? (
                <FlatList
                  data={tasksToDo}
                  keyExtractor={(task) => task.name}
                  scrollEnabled={false}
                  renderItem={({ item }) => (
                    <TaskContainer
                      theme={theme}
                      accent={accent}
                      task={item}
                      onAssign={(task) => dispatch(assignTask(task))}
                      onRemove={(task) => dispatch(removeTask(task))}
                    />
                  )}
                />
              ) : (
                <EmptyState>No quests available to add right now.</EmptyState>
              )}
            </Section>
 
            {/* Skills */}
            <Section>
              <SectionHeading>
                <Icon.UpArrow darkVariant={theme === "light"} />
                <SectionTitle $theme={theme}>Your skills</SectionTitle>
              </SectionHeading>
 
              <SkillStack>
                {skills.map((skill) => (
                  <SkillContainer theme={theme} key={skill.name} skill={skill} />
                ))}
              </SkillStack>
            </Section>
 
            <StatsContainer theme={theme} accent={accent} skills={skills} />
            <TierContainer theme={theme} accent={accent} tier={tier} />
            <View style={{ padding: 10 }}></View>
          </Content>
        </Scroll>
        <BottomBar>
          <RevisionBar>
            <Pressable onPress={() => navigate("/addTask")}>
              <RevisionText $accent={accent}>Revise tasks</RevisionText>
            </Pressable>
            <View style={{ margin: 10 }} />
            <Pressable onPress={() => navigate("/addSkill")}>
              <RevisionText $accent={accent}>Revise skills</RevisionText>
            </Pressable>
          </RevisionBar>
        </BottomBar>
      </GradientBackground>
    </FadeInWrapper>
  );
};

export default MainPage;