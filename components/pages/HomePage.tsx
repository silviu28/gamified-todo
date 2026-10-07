/* eslint-disable react/no-unescaped-entities */
import { FC } from "react";
import { Pressable } from "react-native";
import {  useNavigate } from "react-router-native";
import FadeInWrapper from "../FadeInWrapper";
import Icon from "../icons";
import { shallowEqual } from "react-redux";
import { useStateSelector } from "@/app/store";
import { Background, Content, Intro, Headline, Lede, FeatureList, FeatureRow, FeatureIconWrap, FeatureText, FeatureTitle, FeatureSub, Actions, PrimaryButton, PrimaryButtonText, SkipButton, SkipButtonText } from "../atoms";

const HomePage: FC = () => {
  const [accent, theme] = useStateSelector((state) => [
    state.preferences.accent,
    state.preferences.theme
  ], shallowEqual);
  const navigate = useNavigate();

  return (
    <FadeInWrapper>
      <Background $theme={theme}>
        <Content $theme={theme}>
          <Intro>
            <Headline $theme={theme}>welcome</Headline>
            <Lede>
              Bored of doing your daily mundane activities? Spice the process up by introducing rewards in experience, leveling and more using this app.
            </Lede>
 
            <FeatureList>
              <FeatureRow $theme={theme}>
                <FeatureIconWrap>
                  <Icon.Checkbox darkVariant={theme === "light"} />
                </FeatureIconWrap>
                <FeatureText>
                  <FeatureTitle $theme={theme}>Track your tasks</FeatureTitle>
                  <FeatureSub>
                    Stay organized with a to-do list that adapts to your
                    preferences.
                  </FeatureSub>
                </FeatureText>
              </FeatureRow>
 
              <FeatureRow $theme={theme}>
                <FeatureIconWrap>
                  <Icon.UpArrow darkVariant={theme === "light"} />
                </FeatureIconWrap>
                <FeatureText>
                  <FeatureTitle $theme={theme}>Level up</FeatureTitle>
                  <FeatureSub>
                    Set skill caps for yourself and stay motivated as you
                    close in on them.
                  </FeatureSub>
                </FeatureText>
              </FeatureRow>
 
              <FeatureRow $theme={theme}>
                <FeatureIconWrap>
                  <Icon.Smiley darkVariant={theme === "light"} />
                </FeatureIconWrap>
                <FeatureText>
                  <FeatureTitle $theme={theme}>Motivate yourself</FeatureTitle>
                  <FeatureSub>
                    See your progress in a tangible way, and share it with
                    personalized stat cards.
                  </FeatureSub>
                </FeatureText>
              </FeatureRow>
            </FeatureList>
          </Intro>
 
          <Actions>
            <Pressable>
              <PrimaryButton 
                $accent={accent}
                onPress={() => navigate("/addSkill")}
              >
                <PrimaryButtonText $theme={theme}>Let's go</PrimaryButtonText>
              </PrimaryButton>
            </Pressable>
 
            <Pressable>
              <SkipButton onPress={() => navigate("/main")}>
                <SkipButtonText>Skip for now</SkipButtonText>
              </SkipButton>
            </Pressable>
          </Actions>
        </Content>
      </Background>
    </FadeInWrapper>
  );
};

export default HomePage;