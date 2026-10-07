import { Theme } from "@/types";
import { FC } from "react";
import { Pressable, Text, View } from "react-native";
import { Row, Info, ActionText, Description, Title } from ".";

interface SettingsOptionProps {
  theme: string,
  accent: string,
  title: string,
  description: string,
  actionName?: string
  onPress: () => void;
};

const SettingsOption: FC<SettingsOptionProps> = ({
  theme,
  accent,
  title,
  description,
  actionName = "Execute",
  onPress
}) => {
  return (
    <Row $theme={theme}>
      <Info>
        <Title $theme={theme}>{title}</Title>
        <Description $theme={theme}>{description}</Description>
      </Info>
      <Pressable onPress={onPress}>
        <ActionText $accent={accent}>{actionName}</ActionText>
      </Pressable>
    </Row>
  );
};

export default SettingsOption;