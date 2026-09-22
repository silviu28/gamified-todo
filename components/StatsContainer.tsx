import { Text, View } from "react-native";
import StatsIcon from "./icons/StatsIcon";
import computeLevel from "@/utils/computeLevel";
import { Skill, Theme } from "@/types";

const StatsContainer = ({ style, skills }: { style: Theme, skills: Skill[] }) => {
  const totalXp = skills.reduce((total, skill) => total + skill.xp, 0);
  const [totalLevels] = computeLevel(totalXp);

  return (
    <View style={style.container}>
      <Text style={style.heading}><StatsIcon /> Your overall stats:</Text>
      <Text style={style.p}>Total XP: {totalXp}</Text>
      <Text style={style.p}>Total level: {totalLevels}</Text>
    </View>
  );
};

export default StatsContainer;