import { Task } from "@/types";
import { FC, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import CheckBox from "./CheckBox";
import { p, rowFlex } from "@/constants/styles";
import { dismissOrCompleteTask } from "@/app/tasksSlice";

const computeTimeLeft = (the: string) => {
  console.log("then", the, "now", new Date());
  const then = new Date(the);
  const now = new Date();
  const diff = then.getHours() - now.getHours();
  return diff;
};

interface ToDoTaskProps {
  task: Task;
};

const ToDoTask: FC<ToDoTaskProps> = ({ task }) => {
  const dispatch = useDispatch();
  const [done, setDone] = useState<boolean>(false);

  const complete = () => {
    dispatch(dismissOrCompleteTask({ task }));
  };

  return (
    <View style={[rowFlex, { justifyContent: 'space-between' }]}>
      <Text style={p}>{task.name}</Text>
      <Text style={p}>{computeTimeLeft(String(task.creationDate))}</Text>
      <Pressable onPress={() => dispatch(dismissOrCompleteTask({ task }))}>
        <Text style={p}>x</Text>
      </Pressable>
      <CheckBox onCheck={complete} />
    </View>
  );
};

export default ToDoTask;