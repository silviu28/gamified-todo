import { Skill, Theme } from "@/types";
import { useEffect, useRef } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import ProgressBar from "./ProgressBar";
import computeLevel from "@/utils/computeLevel";
import { TContainer, TopRow, LevelTag, BottomRow, XpText, RemoveText, Name } from ".";

const SkillContainer = ({ theme, skill, onRemove }: { theme: string, skill: Skill, onRemove?: () => void }) => {
  const [level, currentXp, requiredXp] = computeLevel(skill.pts);

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
    <TContainer $theme={theme}>
      <TopRow>
        <Name $theme={theme}>{skill.name}</Name>
        <LevelTag>Level {level}</LevelTag>
      </TopRow>
 
      <ProgressBar percent={percent} />
 
      <BottomRow>
        <XpText>
          {currentXp}/{requiredXp} XP
        </XpText>
        {onRemove && (
          <Pressable onPress={onRemove}>
            <RemoveText>Remove</RemoveText>
          </Pressable>
        )}
      </BottomRow>
    </TContainer>
  );
};

export default SkillContainer;