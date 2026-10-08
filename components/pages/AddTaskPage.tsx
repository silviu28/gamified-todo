import { FunctionComponent } from "react";
import { FlatList, Pressable, View } from "react-native";
import AddTaskForm from "../forms/AddTaskForm";
import { useNavigate } from "react-router-native";
import { Frequency, Skill, Task } from "@/types";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { State, useStateSelector } from "@/app/store";
import TaskContainer from "../atoms/TaskContainer";
import FadeInWrapper from "../FadeInWrapper";
import { addTask, assignTask, removeTask } from "@/app/tasksSlice";
import { db } from "@/db";
import { skillTasks, tasks } from "@/db/schema";
import { eq } from "drizzle-orm";
import { Scroll, Content, Headline, Lede, SkillList, EmptyState, SkillRow, Actions, PrimaryButton, PrimaryButtonText, SecondaryButton, SecondaryButtonText } from "../atoms";
import SkillContainer from "../atoms/SkillContainer";
import Time from "@/utils/time";

const AddTaskPage: FunctionComponent = () => {
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

  const addNewTask = async (name: string, priority: number, frequency: Frequency, skill: Skill) => {
    let [pts, freq] = [10 * priority, Time.frequencyToMilis(frequency)];

    try {
      const [task] = await db.insert(tasks)
        .values({
          name,
          frequency: freq,
          priority,
        })
        .returning();

      await db.insert(skillTasks)
        .values({
          skillId: skill.id,
          taskId: task.id,
          pts
        });

      dispatch(addTask(task));
    } catch (e: unknown) {
      console.error(e);
    }
  };

  const onAssignTask = async (task: Task) => {
    try {
      await db.update(tasks)
        .set({ manuallyAssigned: true })
        .where(eq(tasks.id, task.id));

      dispatch(assignTask(task));
    } catch (e: unknown) {
      console.error(e);
    }
  };

  const onRemoveTask = async (task: Task) => {
    try {
      await db.update(tasks)
        .set({ manuallyAssigned: false })
        .where(eq(tasks.id, task.id))
      // do something else maybe...
      dispatch(removeTask(task));
    } catch (e: unknown) {
      console.error(e);
    }
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
          <View style={{ padding: 10 }}></View>

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
              <PrimaryButtonText $theme={theme}>Done</PrimaryButtonText>
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
