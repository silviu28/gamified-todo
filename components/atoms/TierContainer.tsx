import { useEffect, useRef } from "react";
import { Alert } from "react-native";
import Icon from "../icons";
import computeTier from "@/utils/computeTier";
import { Container, RequirementRow, Requirements, RequirementsLabel, RequirementText, Row, SectionHeading, SectionTitle, TierBadge, TierBadgeText } from ".";

const TierContainer = ({ accent, tier }: {
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
      <SectionHeading>
        <Icon.Trophy />
        <SectionTitle>Your tier</SectionTitle>
      </SectionHeading>
 
      <Row>
        <TierBadge $accent={accent}>
          <TierBadgeText $accent={accent}>{currentTier}</TierBadgeText>
        </TierBadge>
 
        <Requirements>
          <RequirementsLabel>To raise your tier, you must:</RequirementsLabel>
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