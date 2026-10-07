import { FlatList, Text, View } from "react-native";
import SkillContainer from "./SkillContainer";
import { Theme, Skill } from "@/types";
import { Name, TContainer } from ".";

const StatsSummary = ({ theme, skills }: { theme: string, skills: Skill[] }) => {
  return (
    <TContainer $theme={theme}>
      <Name $theme={theme}>My stats:</Name>
      <FlatList
        data={skills}
        keyExtractor={skill => skill.name}
        scrollEnabled={false}
        renderItem={({ item }) => 
          <SkillContainer theme={theme} skill={item} />}
      />
    </TContainer>
  );
};

export default StatsSummary;