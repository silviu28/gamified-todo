import { bgStyle } from "@/constants/styles";
import { Task } from "@/types";
import { FC } from "react";
import { Text, View } from "react-native";

interface TaskContainerProps {
  task: Task;
};

const TaskContainer: FC<TaskContainerProps> = ({ task }) => {
  return (
    <View style={bgStyle}>
    </View>
  );
};

export default TaskContainer;