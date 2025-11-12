import { circularProgress, container, heading, highlight, rowFlex } from "@/constants/styles";
import { FC } from "react";
import { Text, View } from "react-native";
import TrophyIcon from "./icons/TrophyIcon";

const TierContainer: FC = () => {
  return (
    <View style={container}>
      <Text style={heading}><TrophyIcon /> Your tier:</Text>
      <View style={rowFlex}>
        <View style={circularProgress}>
          <Text style={heading}>{0}</Text>
        </View>
        <Text style={highlight}>
          {`To keep your tier, you must:
          > complete ${0} tasks
          > acquire ${0} xp.`}
        </Text>
      </View>
    </View>
  );
};

export default TierContainer;