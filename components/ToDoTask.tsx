import { Task } from "@/types";
import { FC, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import CheckBox from "./CheckBox";
import { p, rowFlex } from "@/constants/styles";
import { dismissTask } from "@/app/tasksSlice";

const computeTimeLeft = (then: Date) => {
  const now = new Date();
  const diff = now.getTime() - then.getTime();
  return diff;
};

interface ToDoTaskProps {
  task: Task;
};

const ToDoTask: FC<ToDoTaskProps> = ({ task }) => {
  const dispatch = useDispatch();
  const [done, setDone] = useState<boolean>(false);

  return (
    <View style={[rowFlex, { justifyContent: 'space-between' }]}>
      <Text style={p}>{task.name}</Text>
      <Text style={p}>{computeTimeLeft(task.creationDate)} left</Text>
      <Pressable onPress={() => dispatch(dismissTask(task))}>
        <Text style={p}>x</Text>
      </Pressable>
      <CheckBox onCheck={v => setDone(v)} />
    </View>
  );
};

export default ToDoTask;