import { p, sub } from "@/constants/styles";
import { Skill } from "@/types";
import { FC } from "react";
import { Text, View } from "react-native";
import ProgressBar from "../ProgressBar";

interface SkillContainerProps {
  skill: Skill;
};

const SkillContainer: FC<SkillContainerProps> = ({ skill }) => {
  const percent = 100 * skill.xp / skill.requiredXp;
  return (
    <View style={{ padding: 2 }}>
      <Text style={p}>{skill.name}, Level {skill.level}</Text>
      <ProgressBar percent={percent} />
      <Text style={sub}>{skill.xp}/{skill.requiredXp}</Text>
    </View>
  );
};

export default SkillContainer;