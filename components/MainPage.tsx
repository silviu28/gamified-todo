import { bgStyle } from "@/constants/styles";
import { Skill, Task } from "@/types";
import { FC } from "react";
import { FlatList, Text, View } from "react-native";
import Highlight from "./styled/Highlight";
import TaskContainer from "./TaskContainer";

type MainPageProps = {
  skills: Skill[],
  tasks: Task[],
};

const MainPage: FC<MainPageProps> = ({ skills, tasks }) => {
  return (
    <View style={bgStyle}>
      <Text style={{ color: "white" }}>Things to do</Text>
      { tasks.map((task, i) =>
        <TaskContainer key={i} task={task} />) }
    </View>
  );
};

export default MainPage;