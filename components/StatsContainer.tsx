import { State } from "@/app/store";
import { container, heading, p } from "@/constants/styles";
import { FC } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import StatsIcon from "./icons/StatsIcon";

const StatsContainer: FC = () => {
  const skills = useSelector((state: State) => state.skills.skills);
  let totalXp = 0;
  let totalLevels = 0;

  return (
    <View style={container}>
      <Text style={heading}><StatsIcon /> Your overall stats:</Text>
      <Text style={p}>Total XP: {totalXp}</Text>
      <Text style={p}>Total level: {totalLevels}</Text>
    </View>
  );
};

export default StatsContainer;