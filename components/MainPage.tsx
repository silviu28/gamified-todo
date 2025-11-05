import { bgStyle } from "@/constants/styles";
import { FC } from "react";
import { Text, View } from "react-native";
import TaskContainer from "./TaskContainer";
import { useSelector } from "react-redux";
import { State } from "@/app/store";

const MainPage: FC = () => {
  const toDoTasks = useSelector((state: State) => state.tasks.tasksToDo);

  return (
    <View style={bgStyle}>
      <Text style={{ color: "white" }}>Things to do</Text>
      { toDoTasks.map((task, i) =>
        <TaskContainer key={i} task={task} />) }
    </View>
  );
};

export default MainPage;