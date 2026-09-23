import { FC } from "react";
import { FlatList, Text, View } from "react-native";
import SkillContainer from "./SkillContainer";
import { Theme, Skill } from "@/types";

const StatsSummary: FC = ({ style, skills }: { style: Theme, skills: Skill[] }) => {
  return (
    <View style={style.container}>
      <Text style={style.heading}>My stats:</Text>
      <FlatList
        data={skills}
        keyExtractor={skill => skill.name}
        scrollEnabled={false}
        renderItem={({ item }) => 
          <SkillContainer style={style} skill={item} />}
      />
    </View>
  );
};

export default StatsSummary;