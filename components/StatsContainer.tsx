import { State } from "@/app/store";
import { container, heading, p } from "@/constants/styles";
import { FC } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

const StatsContainer: FC = () => {
  const skills = useSelector((state: State) => state.skills.skills);
  let totalXp = 0;
  let totalLevels = 0;

  skills.forEach(skill => {
    totalXp += skill.xp;
    totalLevels += skill.level;
  });

  return (
    <View style={container}>
      <Text style={heading}>Your overall stats:</Text>
      <Text style={p}>Total XP: {totalXp}</Text>
      <Text style={p}>Total level: {totalLevels}</Text>
    </View>
  );
};

export default StatsContainer;