import { FC, useContext, useState } from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";
import TaskContainer from "../atoms/TaskContainer";
import { useDispatch, useSelector } from "react-redux";
import { State, useStateSelector } from "@/app/store";
import { useNavigate } from "react-router-native";
import SkillContainer from "../atoms/SkillContainer";
import BottomBar from "../BottomBar";
import ToDoTask from "../atoms/ToDoTask";
import StatsContainer from "../atoms/StatsContainer";
import Modal from "../atoms/Modal";
import TierContainer from "../atoms/TierContainer";
import GradientBackground from "../GradientBackground";
import FadeInWrapper from "../FadeInWrapper";
import ThemeContext from "@/app/context/ThemeContext";
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

const MainPage: FC = () => {
  const style = useContext(ThemeContext);
  const navigate = useNavigate();
  const { tasksToDo, completedTasks } = useSelector((state: State) => state.tasks);
  const skills = useSelector((state: State) => state.skills.allSkills);
  const notes = useSelector((state: State) => state.notes.allNotes);
  const tier = useSelector((state: State) => state.tier);
  const preferences = useSelector((state: State) => state.preferences);
  const accent = useStateSelector((state) => state.preferences.accent);
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

        <View style={{ position: 'absolute', top: 60, right: 20, zIndex: 10, }}>
          <View style={{display: "flex", flexDirection: "row", gap: 10 }}>
            <Pressable onPress={() => navigate("/me")}>
              <Icon.Person />
            </Pressable>
            <Pressable onPress={() => navigate("/settings")}>
              <Icon.Settings />
            </Pressable>
          </View>
        </View>

        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={[style.padding, { paddingBottom: 120 }]}
          showsVerticalScrollIndicator={false}>
          
          <View style={style.container}>
            <Text style={style.heading}>
              <Icon.Checkbox /> Quest list
            </Text>
            <Text/>
            {tasksToDo.length > 0 || completedTasks.length > 0
              ? <>
                  <FlatList
                    data={tasksToDo}
                    keyExtractor={task => task.name}
                    renderItem={({ item }) => 
                      <ToDoTask
                        style={style}
                        task={item}
                        onCompletion={completeTask}
                      />
                    }
                    scrollEnabled={false}
                  />
                  <FlatList
                    data={completedTasks}
                    keyExtractor={task => task.name}
                    renderItem={({ item }) => 
                    <ToDoTask
                      style={style}
                      task={item}
                      completed
                    />}
                    scrollEnabled={false}
                  />
                </>
              : <Text style={style.sub}>Nothing to do for now</Text>}
          </View>

          <View style={style.container}>
            <Text style={style.heading}>
              <Icon.Pencil /> Notes 
            </Text>
              {showNoteForm &&
                <>
                  <AddNoteForm
                    onSubmit={onAddNote}
                  />
                  <Pressable onPress={() => setShowNoteForm(false)}>
                    <Text style={style.sub}>cancel</Text>
                  </Pressable>
                </>}
              {notes.length > 0
                ? <FlatList
                    data={notes}
                    keyExtractor={note => note.title}
                    renderItem={({ item }) => <NoteView note={item} removable />}
                    scrollEnabled={false}
                  />
                : <Text style={style.sub}>No notes added</Text>}
              <Pressable onPress={() => setShowNoteForm(true)}>
                <Text style={style.raisedHighlight}>+</Text>
              </Pressable>
          </View>

          <View style={style.container}>
            <Text style={style.heading}>
              <Icon.Info /> Add quests
            </Text>
            <Text />
            <FlatList
              data={tasksToDo}
              keyExtractor={(task) => task.name}
              scrollEnabled={false}
              renderItem={({ item }) =>
                <TaskContainer
                  accent={accent}
                  task={item}
                  onAssign={(task) => dispatch(assignTask(task))}
                  onRemove={(task) => dispatch(removeTask(task))}
                />
              }
            />
          </View>

          <View style={style.container}>
            <Text style={style.heading}>
              <Icon.UpArrow /> Your skills:
            </Text>
            {skills.map(skill => 
              <SkillContainer key={skill.name} skill={skill} style={style} />)}
          </View>

          <StatsContainer style={style} skills={skills} />
          <TierContainer style={style} tier={tier} />

          <Text/>
        </ScrollView>

        {/* <Modal isVisible>
          { showNoteForm &&
            <AddNoteForm onSubmit={() => {}} />}
        </Modal> */}

        <BottomBar>
          <Pressable onPress={() => navigate("/addTask")}>
            <Text style={style.highlight}>Revise tasks</Text>
          </Pressable>
          <Pressable onPress={() => navigate("/addSkill")}>
            <Text style={style.highlight}>Revise skills</Text>
          </Pressable>
        </BottomBar>
      </GradientBackground>
    </FadeInWrapper>
  );
};

export default MainPage;