import { styled } from "styled-components/native";

export const Background = styled.View<{ $theme: string }>`
  flex: 1;
  background-color: ${({ $theme }) => $theme === "dark" ? "#0b0c0f" : "#fff"};
`;

export const Content = styled.View<{ $theme: string }>`
  flex: 1;
  padding: 28px 24px 32px;
  background-color: ${({ $theme }) => $theme === "dark" ? "#0b0c0f" : "#fff"};
`;
 
export const Intro = styled.View`
  padding-top: 56px;
`;
 
export const Headline = styled.Text<{ $theme: string }>`
  color: ${({ $theme }) => $theme === "dark" ? "#f4f2ed" : "#000"};
  font-size: 34px;
  line-height: 40px;
  margin-bottom: 14px;
`;
 
export const Lede = styled.Text`
  color: #8a8d94;
  font-family: "Lilex-Regular";
  font-size: 16px;
  line-height: 23px;
  max-width: 320px;
`;
 
export const FeatureList = styled.View`
  margin-top: 36px;
`;
 
export const FeatureRow = styled.View<{ $theme: string }>`
  flex-direction: row;
  align-items: flex-start;
  padding: 18px 0;
  border-top-width: 1px;
  border-top-color: ${({ $theme }) => $theme === "dark " ? "rgba(244, 242, 237, 0.1)" : "black"};
`;
 
export const FeatureIconWrap = styled.View`
  width: 28px;
  align-items: center;
  margin-top: 2px;
`;
 
export const FeatureText = styled.View`
  flex: 1;
  margin-left: 14px;
`;
 
export const FeatureTitle = styled.Text<{ $theme: string }>`
  color: ${({ $theme }) => $theme === "dark" ? "#f4f2ed" : "#000"};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
`;
 
export const FeatureSub = styled.Text`
  color: #8a8d94;
  font-size: 14px;
  font-family: "Lilex Regular";
  line-height: 20px;
`;
 
export const Actions = styled.View`
  margin-top: 32px;
`;
 
export const PrimaryButton = styled.Pressable<{ $accent: string }>`
  background-color: ${({ $accent }) => $accent};
  border-radius: 14px;
  padding: 17px;
  align-items: center;
`;
 
export const PrimaryButtonText = styled.Text`
  color: #16181d;
  font-size: 16px;
  font-weight: 700;
`;
 
export const SkipButton = styled.Pressable`
  padding: 16px;
  align-items: center;
`;
 
export const SkipButtonText = styled.Text`
  color: #8a8d94;
  font-size: 15px;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  background-color: #16181d;
`;
 
export const SkillList = styled.View`
  margin-top: 28px;
`;
 
export const SkillRow = styled.View`
  padding: 14px 0;
  border-top-width: 1px;
  border-top-color: rgba(244, 242, 237, 0.1);
`;
 
export const EmptyState = styled.Text`
  color: #8a8d94;
  font-size: 14px;
  margin-top: 28px;
`;
 
export const SecondaryButton = styled.View`
  padding: 16px;
  align-items: center;
`;
 
export const SecondaryButtonText = styled.Text`
  color: #8a8d94;
  font-size: 15px;
`;

export const Form = styled.View`
  padding-top: 10px;
`;
 
export const Label = styled.Text<{ $theme: string }>`
  color: ${({ $theme }) => $theme === "dark" ? "#f4f2ed" : "#000000"};
  font-size: 15px;
  margin-bottom: 8px;
`;
 
export const NameInput = styled.TextInput.attrs({
  placeholderTextColor: "#8a8d94",
})<{ $theme: string }>`
  color: ${({ $theme }) => $theme === "dark" ? "#f4f2ed" : "#000000"};
  background-color: rgba(244, 242, 237, 0.06);
  border-radius: 10px;
  padding: 13px 14px;
  font-size: 16px;
  margin-bottom: 22px;
`;
 
export const PriorityRow = styled.View`
  flex-direction: row;
  gap: 10px;
  margin-bottom: 26px;
`;
 
export const AddButton = styled.Pressable<{ $accent: string }>`
  align-self: flex-start;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: ${({ $accent }) => $accent};
  align-items: center;
  justify-content: center;
`;
 
export const AddButtonText = styled.Text`
  color: #16181d;
  font-size: 26px;
  font-weight: 600;
  line-height: 28px;
`;

export const HelperText = styled.Text`
  color: #8a8d94;
  font-size: 13px;
  margin-top: 6px;
  margin-bottom: 22px;
`;
 
export const OptionRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
`;
 
export const PointHints = styled.View`
  margin-bottom: 22px;
`;
 
export const PointHint = styled.Text`
  color: #8a8d94;
  font-size: 13px;
  line-height: 19px;
`;

export const Row = styled.View<{ $theme: string }>`
  background-color: ${({ $theme }) => $theme === "dark" ? "rgba(244, 242, 237, 0.06)" : "rgba(244, 242, 237, 0.047)"};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 14px;
  padding: 14px 16px;
`;
 
export const Info = styled.View`
  flex: 1;
  padding-right: 12px;
`;
 
export const Name = styled.Text<{ $theme: string }>`
  color: ${({ $theme }) => $theme === "dark" ? "#f4f2ed" : "#000"};
  font-size: 15px;
  margin-bottom: 3px;
`;
 
export const Meta = styled.Text`
  color: #8a8d94;
  font-size: 13px;
`;
 
export const ActionButton = styled.Pressable<{ $variant: "remove" | "assign", $accent: string }>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  background-color: ${({ $variant, $accent }) =>
    $variant === "remove" ? "rgba(244, 242, 237, 0.08)" : $accent};
`;
 
export const ActionButtonText = styled.Text<{ $variant: "remove" | "assign" }>`
  font-size: 18px;
  font-weight: 600;
  line-height: 20px;
  color: ${({ $variant }) => ($variant === "remove" ? "#8a8d94" : "#16181d")};
`;

export const TopBar = styled.View`
  position: absolute;
  top: 60px;
  right: 20px;
  z-index: 10;
  flex-direction: row;
  gap: 14px;
`;
 
export const Section = styled.View`
  margin-bottom: 34px;
`;
 
export const SectionHeading = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-bottom: 14px;
`;
 
export const SectionTitle = styled.Text<{ $theme: string }>`
  color: ${({ $theme }) => $theme === "dark" ? "#f4f2ed" : "#000000"};
  font-size: 19px;
`;
 
export const Divider = styled.View`
  border-top-width: 1px;
  border-top-color: rgba(244, 242, 237, 0.08);
  margin: 4px 0;
`;
 
export const CancelText = styled.Text`
  color: #8a8d94;
  font-size: 14px;
  margin-top: 10px;
`;
 
export const AddNoteButton = styled.Pressable<{ $accent: string }>`
  align-self: flex-start;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({ $accent }) => $accent};
  align-items: center;
  justify-content: center;
  margin-top: 14px;
`;
 
export const AddNoteButtonText = styled.Text`
  color: #16181d;
  font-size: 22px;
  font-weight: 600;
  line-height: 24px;
`;
 
export const SkillStack = styled.View`
  gap: 10px;
`;
 
export const RevisionBar = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;
 
export const RevisionText = styled.Text<{ $accent: string }>`
  color: ${({ $accent }) => $accent};
  font-size: 14px;
  font-weight: 600;
`;

export const Container = styled.View`
  margin-bottom: 34px;
`;
 
export const StatRow = styled.View`
  flex-direction: row;
  gap: 12px;
`;
 
export const StatCard = styled.View`
  flex: 1;
  background-color: rgba(244, 242, 237, 0.06);
  border-radius: 14px;
  padding: 16px;
`;
 
export const StatValue = styled.Text<{ $accent: string }>`
  color: ${({ $accent }) => $accent};
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 4px;
`;
 
export const StatLabel = styled.Text`
  color: #8a8d94;
  font-size: 13px;
`;
 
export const TierBadge = styled.View<{ $accent: string }>`
  width: 72px;
  height: 72px;
  border-radius: 36px;
  border-width: 2px;
  border-color: ${({ $accent }) => $accent};
  align-items: center;
  justify-content: center;
`;
 
export const TierBadgeText = styled.Text<{ $accent: string }>`
  color: ${({ $accent }) => $accent};
  font-size: 22px;
  font-weight: 700;
`;
 
export const Requirements = styled.View`
  flex: 1;
  margin-left: 10px;
`;
 
export const RequirementsLabel = styled.Text<{$theme: string}>`
  color: ${({ $theme }) => $theme === "dark" ? "#f4f2ed" : "#000000"};
  font-size: 14px;
  margin-bottom: 8px;
`;
 
export const RequirementRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`;
 
export const RequirementText = styled.Text`
  color: #8a8d94;
  font-size: 13px;
`;
 
export const Group = styled.View`
  margin-bottom: 10px;
`;
 
export const GroupTitle = styled.Text<{ $theme: string }>`
  color: ${({ $theme }) => $theme === "dark" ? "#f4f2ed" : "#000000"};
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 4px;
`;
 
export const GroupSub = styled.Text`
  color: #8a8d94;
  font-size: 13px;
  margin-bottom: 14px;
`;
 
export const DangerZone = styled.View`
  border-top-width: 1px;
  border-top-color: rgba(244, 242, 237, 0.1);
  padding-top: 24px;
  gap: 18px;
`;

export const Title = styled.Text<{ $theme: string }>`
  color: ${({ $theme }) => $theme === "dark" ? "#f4f2ed" : "#000000"};
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 3px;
`;
 
export const Description = styled.Text<{ $theme: string }>`
  color: ${({ $theme }) => $theme === "dark" ? "#f4f2ed" : "#000000"};
  font-size: 13px;
  line-height: 18px;
`;
 
export const ActionText = styled.Text<{ $accent: string }>`
  color: ${({ $accent }) => $accent};
  font-size: 14px;
  font-weight: 600;
`;

export const IntroText = styled.Text`
  color: #8a8d94;
  font-size: 14px;
  margin-bottom: 30px;
`;

export const TContainer = styled.View<{ $theme: string }>`
  background-color: ${({ $theme }) => $theme === "dark" ? "rgba(244, 242, 237, 0.06)" : "rgba(244, 242, 237, 0.244)"};
  border-radius: 14px;
  padding: 14px 16px;
`;
 
export const TopRow = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 10px;
`;
 
 
export const LevelTag = styled.Text`
  color: #e8a33d;
  font-size: 13px;
  font-weight: 600;
`;
 
export const BottomRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;
 
export const XpText = styled.Text`
  color: #8a8d94;
  font-size: 12px;
`;
 
export const RemoveText = styled.Text`
  color: #8a8d94;
  font-size: 12px;
  text-decoration-line: underline;
`;

