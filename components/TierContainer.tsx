import { circularProgress, container, heading, highlight, rowFlex } from "@/constants/styles";
import { FC, useEffect, useRef } from "react";
import { Alert, Text, View } from "react-native";
import TrophyIcon from "./icons/TrophyIcon";
import { useDispatch, useSelector } from "react-redux";
import { State } from "@/app/store";
import computeTier from "@/utils/computeTier";

const TierContainer: FC = () => {
  const tier = useSelector((state: State) => state.tier);
  const dispatch = useDispatch();

  // same as the skills container, use a ref and effect to check for tier raise
  const currentTierRef = useRef<number>(tier.tier);

  useEffect(() => {
    if (currentTierRef.current < tier.tier) {
      Alert.alert("Tier raise",
        `Congrats, your raised your tier! ${currentTierRef.current} -> ${tier.tier}`);
      currentTierRef.current = tier.tier;
    }
  }, [tier.tier]);

  const [currentTier, requiredTaskCount, requiredXpCount] = computeTier(tier.tasksCount, tier.consolidatedXp);

  return (
    <View style={container}>
      <Text style={heading}><TrophyIcon /> Your tier:</Text>
      <View style={rowFlex}>
        <View style={circularProgress}>
          <Text style={heading}>
            {currentTier}
          </Text>
        </View>
        <Text style={highlight}>
          {`To raise your tier, you must:
          > complete ${requiredTaskCount} tasks
          > acquire ${requiredXpCount} xp.`}
        </Text>
      </View>
    </View>
  );
};

export default TierContainer;