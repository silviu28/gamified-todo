import { assignTask } from "@/app/tasksSlice";
import { removeTask } from "@/app/skillsSlice";
import { Task } from "@/types";
import { FC, useContext } from "react";
import { Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import ThemeContext from "@/app/context/ThemeContext";

interface TaskContainerProps {
  task: Task;
  assignable?: boolean;
  removable?: boolean;
};

const TaskContainer: FC<TaskContainerProps> = ({ task, assignable, removable }) => {
  const style = useContext(ThemeContext);
  const dispatch = useDispatch();

  return (
    <View style={style.flexContainer}>
      <View style={style.colFlex}>
        <Text style={style.p}>{task.name}</Text>
        <Text style={style.sub}>{task.frequency}, {task.priority}</Text>
      </View>
      <View style={style.colFlex}>
        { removable &&
          <Pressable onPress={() => dispatch(removeTask({ skill: task.skill, task }))}>
            <Text style={style.highlight}>x</Text>
          </Pressable> }
        { assignable &&
          <Pressable onPress={() => dispatch(assignTask(task))}>
            <Text style={style.highlight}>+</Text>
          </Pressable> }
      </View>
    </View>
  );
};

export default TaskContainer;