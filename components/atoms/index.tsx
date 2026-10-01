import { styled } from "styled-components/native";

export const Background = styled.View<{ $theme: string }>`
  flex: 1;
  background-color: ${({ $theme }) => $theme === "dark" ? "#0b0c0f" : "#fff" } ;
`;

export const Content = styled.View`
  flex: 1;
  padding: 28px 24px 32px;
  justify-content: space-between;
`;
 
export const Intro = styled.View`
  padding-top: 56px;
`;
 
export const Headline = styled.Text`
  color: #f4f2ed;
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
 
export const FeatureRow = styled.View`
  flex-direction: row;
  align-items: flex-start;
  padding: 18px 0;
  border-top-width: 1px;
  border-top-color: rgba(244, 242, 237, 0.1);
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
 
export const FeatureTitle = styled.Text`
  color: #f4f2ed;
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
 
export const Label = styled.Text`
  color: #f4f2ed;
  font-size: 15px;
  margin-bottom: 8px;
`;
 
export const NameInput = styled.TextInput.attrs({
  placeholderTextColor: "#8a8d94",
})`
  color: #f4f2ed;
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
