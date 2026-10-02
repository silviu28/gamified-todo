import { Text, View } from "react-native";
import computeLevel from "@/utils/computeLevel";
import { Skill, Theme } from "@/types";
import Icon from "../icons";
import { Container, SectionHeading, SectionTitle, StatRow, StatCard, StatValue, StatLabel } from ".";

const StatsContainer = ({ accent, skills }: { accent: string, skills: Skill[] }) => {
  const totalXp = skills.reduce((total, skill) => total + skill.pts, 0);
  const [totalLevels] = computeLevel(totalXp);

  return (
    <Container>
      <SectionHeading>
        <Icon.Stats />
        <SectionTitle>Your overall stats</SectionTitle>
      </SectionHeading>
 
      <StatRow>
        <StatCard>
          <StatValue $accent={accent}>{totalXp}</StatValue>
          <StatLabel>Total XP</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue $accent={accent}>{totalLevels}</StatValue>
          <StatLabel>Total level</StatLabel>
        </StatCard>
      </StatRow>
    </Container>

  );
};

export default StatsContainer;