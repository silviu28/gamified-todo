import { Task } from "@/types";
import { FC } from "react";
import { Alert, View } from "react-native";
import CheckBox from "./CheckBox";
import { Name, Row } from ".";

const computeTimeLeft = (the: Date) => {
  const then = new Date(the);
  const hoursLeft = 24 - then.getHours();
  return hoursLeft;
};

interface ToDoTaskProps {
  theme: string,
  accent: string,
  task: Task;
  onCompletion?: (task: Task) => void,
  completed?: boolean;
};

const ToDoTask: FC<ToDoTaskProps> = ({ theme, accent, task, onCompletion, completed }) => {
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
    <Row $theme={theme}>
    <Name $theme={theme}
      style={[completed && { textDecorationLine: 'line-through' },{ flexShrink: 1 }]}>
      {task.name}
    </Name>

    {!completed && (
      <Name $theme={theme} style={[{ marginHorizontal: 8, flexShrink: 0 }]}>
        {computeTimeLeft(task.creationDate)} hours left
      </Name>
    )}

    <View style={{ flexShrink: 0 }}>
      <CheckBox accent={accent} onCheck={complete} />
    </View>
  </Row>
  );
};

export default ToDoTask;