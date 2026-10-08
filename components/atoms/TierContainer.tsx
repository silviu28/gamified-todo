import { useEffect, useRef } from "react";
import { Alert } from "react-native";
import computeTier from "@/utils/computeTier";
import { Container, RequirementRow, Requirements, RequirementsLabel, RequirementText, Row, TierBadge, TierBadgeText } from ".";

const TierContainer = ({ theme, accent, tier }: {
  theme: string,
  accent: string,
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
    <Container>
      <Row $theme={theme}>
        <TierBadge $accent={accent}>
          <TierBadgeText $accent={accent}>{currentTier}</TierBadgeText>
        </TierBadge>
 
        <Requirements>
          <RequirementsLabel $theme={theme}>To raise your tier, you must:</RequirementsLabel>
          <RequirementRow>
            <RequirementText>{">"} Complete {requiredTaskCount} tasks</RequirementText>
          </RequirementRow>
          <RequirementRow>
            <RequirementText>{">"} Acquire {requiredXpCount} XP</RequirementText>
          </RequirementRow>
        </Requirements>
      </Row>
    </Container>

  );
};

export default TierContainer;