import computeLevel from "@/utils/computeLevel";
import { Skill } from "@/types";
import Icon from "../icons";
import { Container, SectionHeading, SectionTitle, StatRow, StatCard, StatValue, StatLabel } from ".";

const StatsContainer = ({ theme, accent, skills }: { theme: string, accent: string, skills: Skill[] }) => {
  const totalXp = skills.reduce((total, skill) => total + skill.pts, 0);
  const [totalLevels] = computeLevel(totalXp);

  return (
    <Container>
      <SectionHeading>
        <Icon.Stats darkVariant={theme === "light"} />
        <SectionTitle $theme={theme}>Your overall stats</SectionTitle>
      </SectionHeading>
 
      <StatRow>
        <StatCard $theme={theme}>
          <StatValue $accent={accent}>{totalXp}</StatValue>
          <StatLabel>Total XP</StatLabel>
        </StatCard>
        <StatCard $theme={theme}>
          <StatValue $accent={accent}>{totalLevels}</StatValue>
          <StatLabel>Total level</StatLabel>
        </StatCard>
      </StatRow>
    </Container>

  );
};

export default StatsContainer;