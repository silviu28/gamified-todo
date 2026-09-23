import { Task, Theme } from "@/types";
import { FC } from "react";
import { Alert, Text, View } from "react-native";
import CheckBox from "./CheckBox";

const computeTimeLeft = (the: string) => {
  const then = new Date(the);
  const hoursLeft = 24 - then.getHours();
  return hoursLeft;
};

interface ToDoTaskProps {
  style: Theme,
  task: Task;
  onCompletion?: (task: Task) => void,
  completed?: boolean;
};

const ToDoTask: FC<ToDoTaskProps> = ({ style, task, onCompletion, completed }) => {
  const complete = () => {
    if (!onCompletion) return;
    Alert.alert("Task complete", "Confirm task completion?", [
      {
        text: "Yes",
        onPress: () => {
          onCompletion(task);
        },
      },
      {
        text: "No",
        style: "cancel"
      }
    ]);
  };

  return (
    <View style={[style.rowFlex, { justifyContent: 'space-between', alignItems: 'center', padding: 3 }]}>
    <Text
      style={[style.p,completed && { textDecorationLine: 'line-through' },{ flexShrink: 1 }]}>
      {task.name}
    </Text>

    {!completed && (
      <Text style={[style.p, { marginHorizontal: 8, flexShrink: 0 }]}>
        {computeTimeLeft(String(task.creationDate))} hours left
      </Text>
    )}

    <View style={{ flexShrink: 0 }}>
      <CheckBox style={style} onCheck={complete} />
    </View>
  </View>
  );
};

export default ToDoTask;