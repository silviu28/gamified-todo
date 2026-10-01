import { styled } from "styled-components/native";

export const Background = styled.View`
  flex: 1;
  background-color: #0b0c0f;
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
 
export const PrimaryButton = styled.View<{ $accent: string }>`
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
 
export const SkipButton = styled.View`
  padding: 16px;
  align-items: center;
`;
 
export const SkipButtonText = styled.Text`
  color: #8a8d94;
  font-size: 15px;
`;