import { Task } from "@/types";
import { FC, useContext } from "react";
import { Alert, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import CheckBox from "./CheckBox";
import { levelSkill } from "@/app/skillsSlice";
import { addStats } from "@/app/tierSlice";
import ThemeContext from "@/app/context/ThemeContext";
import { dismissOrCompleteTask } from "@/app/tasksSlice";

const computeTimeLeft = (the: string) => {
  const then = new Date(the);
  const hoursLeft = 24 - then.getHours();
  return hoursLeft;
};

interface ToDoTaskProps {
  task: Task;
  completed?: boolean;
};

const ToDoTask: FC<ToDoTaskProps> = ({ task, completed }) => {
  const style = useContext(ThemeContext);
  const dispatch = useDispatch();

  const complete = () => {
    Alert.alert("Task complete", "Confirm task completion?", [
      {
        text: "Yes",
        onPress: () => {
          dispatch(dismissOrCompleteTask({ task }));
          dispatch(levelSkill({ skill: task.skill, xp: task.xp }));
          dispatch(addStats({ taskCount: 1, xp: task.xp }));
        },
      },
      {
        text: "No",
        style: "cancel"
      }
    ]);
  };

  return (
    <View style={[style.rowFlex, { justifyContent: 'space-between' }]}>
      <Text style={[style.p, (completed && { textDecorationLine: "line-through" })]}>{task.name}</Text>
      {!completed &&
        <Text style={style.p}>
          {computeTimeLeft(String(task.creationDate))} hours left
        </Text>}
      <CheckBox onCheck={complete} />
    </View>
  );
};

export default ToDoTask;