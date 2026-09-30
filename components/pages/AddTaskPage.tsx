import { FunctionComponent, useContext } from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";
import AddTaskForm from "../forms/AddTaskForm";
import { useNavigate } from "react-router-native";
import { Frequency, Skill } from "@/types";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { State } from "@/app/store";
import TaskContainer from "../atoms/TaskContainer";
import FadeInWrapper from "../FadeInWrapper";
import ThemeContext from "@/app/context/ThemeContext";
import { addTask, assignTask, removeTask } from "@/app/tasksSlice";
import { db } from "@/db";
import { skillTasks, tasks } from "@/db/schema";
import { eq } from "drizzle-orm";

const AddTaskPage: FunctionComponent = () => {
  const style = useContext(ThemeContext);
  const { skills, allTasks } = useSelector((state: State) => ({
    skills: state.skills.allSkills,
    allTasks: state.tasks.tasksToDo
  }), shallowEqual);
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
      <ScrollView
        style={style.bg}
        showsVerticalScrollIndicator={false}>
        <View style={style.padding}>
          <Text style={style.heading}>
            Now add some tasks that you need to do:
          </Text>
          <AddTaskForm
            skills={skills}
            style={style}
            onSubmit={addNewTask}
          />

          <FlatList
            data={allTasks}
            scrollEnabled={false}
            keyExtractor={task => task.name}
            renderItem={({ item }) => 
              <TaskContainer
                style={style}
                task={item}
                onAssign={onAssignTask}
                onRemove={onRemoveTask}
              />
            }
          />

          <Pressable onPress={() => navigate('/main')}>
            <Text style={style.highlight}>done</Text>
          </Pressable>
          <Pressable onPress={() => navigate('/suggest')}>
            <Text style={style.highlight}>need help?</Text>
          </Pressable>
        </View>
      </ScrollView>
    </FadeInWrapper>
  )
};

export default AddTaskPage;
