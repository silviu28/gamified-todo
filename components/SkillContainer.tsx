import { p, sub } from "@/constants/styles";
import { Skill } from "@/types";
import { FC } from "react";
import { Text, View } from "react-native";
import ProgressBar from "./ProgressBar";
import computeLevel from "@/utils/computeLevel";

interface SkillContainerProps {
  skill: Skill;
};

const SkillContainer: FC<SkillContainerProps> = ({ skill }) => {
  const [level, currentXp, requiredXp] = computeLevel(skill.xp);

  const percent = 100 * currentXp / requiredXp;
  return (
    <View style={{ padding: 2 }}>
      <Text style={p}>{skill.name}, Level {level}</Text>
      <ProgressBar percent={percent} />
      <Text style={sub}>{currentXp}/{requiredXp}</Text>
    </View>
  );
};

export default SkillContainer;