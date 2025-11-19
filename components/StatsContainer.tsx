import { State } from "@/app/store";
import { container, heading, p } from "@/constants/styles";
import { FC } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import StatsIcon from "./icons/StatsIcon";
import computeLevel from "@/utils/computeLevel";

const StatsContainer: FC = () => {
  const skills = useSelector((state: State) => state.skills.skills);
  const totalXp = skills.reduce((total, skill) => total + skill.xp, 0);
  const [totalLevels] = computeLevel(totalXp);

  return (
    <View style={container}>
      <Text style={heading}><StatsIcon /> Your overall stats:</Text>
      <Text style={p}>Total XP: {totalXp}</Text>
      <Text style={p}>Total level: {totalLevels}</Text>
    </View>
  );
};

export default StatsContainer;