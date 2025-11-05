import { p } from "@/constants/styles";
import { Skill } from "@/types";
import { FC } from "react";
import { Text, View } from "react-native";

interface SkillContainerProps {
  skill: Skill;
};

const SkillContainer: FC<SkillContainerProps> = ({ skill }) => {
  return (
    <View>
      <Text style={p}>{skill.name}, Level {skill.level}</Text>
    </View>
  );
};

export default SkillContainer;