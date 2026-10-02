import { FunctionComponent, useContext } from "react";
import { FlatList, Pressable, View } from "react-native";
import AddTaskForm from "../forms/AddTaskForm";
import { useNavigate } from "react-router-native";
import { Frequency, Skill } from "@/types";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { State, useStateSelector } from "@/app/store";
import TaskContainer from "../atoms/TaskContainer";
import FadeInWrapper from "../FadeInWrapper";
import ThemeContext from "@/app/context/ThemeContext";
import { addTask, assignTask, removeTask } from "@/app/tasksSlice";
import { db } from "@/db";
import { skillTasks, tasks } from "@/db/schema";
import { eq } from "drizzle-orm";
import { Scroll, Content, Headline, Lede, SkillList, EmptyState, SkillRow, Actions, PrimaryButton, PrimaryButtonText, SecondaryButton, SecondaryButtonText } from "../atoms";
import SkillContainer from "../atoms/SkillContainer";

const AddTaskPage: FunctionComponent = () => {
  const style = useContext(ThemeContext);
  const { skills, allTasks } = useSelector((state: State) => ({
    skills: state.skills.allSkills,
    allTasks: state.tasks.tasksToDo
  }), shallowEqual);
  const [theme, accent] = useStateSelector((state) => [
    state.preferences.theme,
    state.preferences.accent
  ], shallowEqual);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addNewTask = (name: string, priority: number, frequency: Frequency, skill: Skill) => {
    let [pts, freq] = [10 * priority, 0];
    switch (frequency) {
      case "one-time": freq = 0; break;
      case "daily": freq = 24 * 3600 * 1000; break;
      case "weekly": freq = 7 * 24 * 3600 * 1000; break;
      case "monthly": freq = 30 * 24 * 3600 * 1000; break;
      case "yearly": freq = 365 * 24 * 3600 * 1000; break;
    }

    db.insert(tasks)
      .values({
        name,
        frequency: freq,
        priority,
      })
      .returning()
      .then(([task]) => {
        db.insert(skillTasks)
          .values({
            skillId: skill.id,
            taskId: task.id,
            pts
          })
          .then(() => dispatch(addTask(task)));
      });
  };

  const onAssignTask = (task) => {
    dispatch(assignTask(task));
    db.update(tasks)
      .set({ manuallyAssigned: true })
      .where(eq(tasks.id, task.id))
      .then((_) => { /* something */ });
  };

  const onRemoveTask = (task) => {
    dispatch(removeTask(task));
    db.update(tasks)
      .set({ manuallyAssigned: false })
      .where(eq(tasks.id, task.id))
      .then((_) => { /* something */ });
  };

  return (
    <FadeInWrapper>
      <Scroll showsVerticalScrollIndicator={false}>
        <Content $theme={theme}>
          <View style={{ padding: 54 }}></View>
          <Headline $theme={theme}>2.</Headline>
          <Lede>
            Now add some tasks
          </Lede>
 
          <AddTaskForm
            skills={skills}
            theme={theme}
            accent={accent}
            onSubmit={addNewTask} 
          />

          <FlatList
            data={allTasks}
            scrollEnabled={false}
            keyExtractor={task => task.name}
            renderItem={({ item }) => 
              <TaskContainer
                theme={theme}
                accent={accent}
                task={item}
                onAssign={onAssignTask}
                onRemove={onRemoveTask}
              />
            }
          />
 
          <SkillList>
            {skills.length === 0
              ? <EmptyState>No skills added yet.</EmptyState>
              : (
              <FlatList
                data={skills}
                scrollEnabled={false}
                keyExtractor={(skill) => skill.name}
                renderItem={({ item }) => (
                  <SkillRow>
                    <SkillContainer
                      theme={theme}
                      skill={item}
                      onRemove={() => onRemoveTask(item)}
                    />
                  </SkillRow>
                )}
              />
            )}
          </SkillList>
 
          <Actions>
            <PrimaryButton onPress={() => navigate("/main")} $accent={accent}>
              <PrimaryButtonText>Done</PrimaryButtonText>
            </PrimaryButton>
 
            <Pressable onPress={() => navigate("/suggest")}>
              <SecondaryButton>
                <SecondaryButtonText>Need help?</SecondaryButtonText>
              </SecondaryButton>
            </Pressable>
          </Actions>
        </Content>
      </Scroll>
    </FadeInWrapper>
  )
};

export default AddTaskPage;
