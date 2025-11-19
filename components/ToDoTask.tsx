import { Task } from "@/types";
import { FC } from "react";
import { Alert, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import CheckBox from "./CheckBox";
import { p, rowFlex } from "@/constants/styles";
import { levelSkill } from "@/app/skillsSlice";
import { addStats } from "@/app/tierSlice";

const computeTimeLeft = (the: string) => {
  console.log("then", the, "now", new Date());
  const then = new Date(the);
  const hoursLeft = 24 - then.getHours();
  return hoursLeft;
};

interface ToDoTaskProps {
  task: Task;
};

const ToDoTask: FC<ToDoTaskProps> = ({ task }) => {
  const dispatch = useDispatch();

  const complete = () => {
    Alert.alert("Task complete", "Confirm task completion?", [
      {
        text: "Yes",
        onPress: () => {
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
    <View style={[rowFlex, { justifyContent: 'space-between' }]}>
      <Text style={p}>{task.name}</Text>
      <Text style={p}>
        {computeTimeLeft(String(task.creationDate))} hours left
      </Text>
      <CheckBox onCheck={complete} />
    </View>
  );
};

export default ToDoTask;