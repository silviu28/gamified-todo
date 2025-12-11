import { Skill } from "@/types";
import { FC, useEffect, useRef } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import ProgressBar from "./ProgressBar";
import computeLevel from "@/utils/computeLevel";
import { useDispatch } from "react-redux";
import { removeSkill } from "@/app/skillsSlice";
import useDynamicTheme from "@/hooks/useDynamicTheme";

interface SkillContainerProps {
  skill: Skill;
  removable?: boolean;
};

const SkillContainer: FC<SkillContainerProps> = ({ skill, removable }) => {
  const dispatch = useDispatch();
  const style = useDynamicTheme();
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
  }, [level]);

  const percent = 100 * currentXp / requiredXp;
  return (
    <View style={{ padding: 2 }}>
      <Text style={style.p}>{skill.name}, Level {level}</Text>
      <ProgressBar percent={percent} />
      <Text style={style.sub}>{currentXp}/{requiredXp}</Text>
      {removable &&
        <Pressable onPress={() => dispatch(removeSkill(skill))}>
          <Text style={style.sub}>remove</Text>
        </Pressable>}
    </View>
  );
};

export default SkillContainer;