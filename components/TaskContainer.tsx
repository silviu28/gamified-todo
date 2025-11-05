import { p } from "@/constants/styles";
import { Task } from "@/types";
import { FC } from "react";
import { Text, View } from "react-native";

interface TaskContainerProps {
  task: Task;
};

const TaskContainer: FC<TaskContainerProps> = ({ task }) => {
  return (
    <View>
      <Text style={p}>{task.name}</Text>
    </View>
  );
};

export default TaskContainer;