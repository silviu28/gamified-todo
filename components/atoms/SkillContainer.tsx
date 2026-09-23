import { Skill, Theme } from "@/types";
import { useEffect, useRef } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import ProgressBar from "./ProgressBar";
import computeLevel from "@/utils/computeLevel";

const SkillContainer = ({ style, skill, onRemove }: { style: Theme, skill: Skill, onRemove?: () => void }) => {
  const [level, currentXp, requiredXp] = computeLevel(skill.xp);

  // track the previous level using a ref (a value that persists between renders)
  const previousLevelRef = useRef<number>(level);

  // use an effect to trigger the modal popup when the users levels up
  useEffect(() => {
    if (previousLevelRef.current < level) {
      Alert.alert("Level up",
        `Congrats! ${skill.name} went up in level! ${previousLevelRef.current} -> ${level}`);
      previousLevelRef.current = level;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level]);

  const percent = 100 * currentXp / requiredXp;
  return (
    <View style={{ padding: 2 }}>
      <Text style={style.p}>{skill.name}, Level {level}</Text>
      <ProgressBar percent={percent} />
      <Text style={style.sub}>{currentXp}/{requiredXp}</Text>
      {onRemove && (
        <Pressable onPress={onRemove}>
          <Text style={style.sub}>remove</Text>
        </Pressable>
      )}
    </View>
  );
};

export default SkillContainer;