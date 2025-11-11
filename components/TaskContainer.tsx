import { assignTask } from "@/app/tasksSlice";
import { removeTask } from "@/app/skillsSlice";
import { colFlex, flexContainer, highlight, p, sub } from "@/constants/styles";
import { Task } from "@/types";
import { FC } from "react";
import { Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";

interface TaskContainerProps {
  task: Task;
  assignable?: boolean;
  removable?: boolean;
};

const TaskContainer: FC<TaskContainerProps> = ({ task, assignable, removable }) => {
  const dispatch = useDispatch();

  return (
    <View style={flexContainer}>
      <View style={colFlex}>
        <Text style={p}>{task.name}</Text>
        <Text style={sub}>{task.frequency}, {task.priority}</Text>
      </View>
      <View style={colFlex}>
        { removable &&
          <Pressable onPress={() => dispatch(removeTask({ skill: task.skill, task }))}>
            <Text style={highlight}>x</Text>
          </Pressable> }
        { assignable &&
          <Pressable onPress={() => dispatch(assignTask(task))}>
            <Text style={highlight}>+</Text>
          </Pressable> }
      </View>
    </View>
  );
};

export default TaskContainer;