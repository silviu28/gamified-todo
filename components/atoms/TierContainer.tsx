import { useEffect, useRef } from "react";
import { Alert, Text, View } from "react-native";
import TrophyIcon from "../icons/TrophyIcon";
import computeTier from "@/utils/computeTier";
import { Theme } from "@/types";

const TierContainer = ({ style, tier }: {
  style: Theme,
   tier: {
    tier: number;
    tasksCount: number;
    consolidatedXp: number;
  } 
}) => {
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
    <View style={style.container}>
      <Text style={style.heading}><TrophyIcon /> Your tier:</Text>
      <View style={style.rowFlex}>
        <View style={style.circularProgress}>
          <Text style={style.heading}>
            {currentTier}
          </Text>
        </View>
        <Text style={style.highlight}>
          {`To raise your tier, you must:
          > complete ${requiredTaskCount} tasks
          > acquire ${requiredXpCount} xp.`}
        </Text>
      </View>
    </View>
  );
};

export default TierContainer;