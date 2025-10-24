import { bgStyle } from "@/constants/styles";
import { Skill, Task } from "@/types";
import { FunctionComponent } from "react";
import { View } from "react-native";
import Highlight from "./styled/Highlight";

type MainPageProps = {
  skills: Skill[],
  tasks: Task[],
};

const MainPage: FunctionComponent<MainPageProps> = ({ skills, tasks }) => {
  return (
    <View style={bgStyle}>
      <Highlight>congrats!</Highlight>
    </View>
  );
};

export default MainPage;