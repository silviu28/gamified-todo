import { Theme } from "@/types";
import { FC } from "react";
import { Pressable, Text, View } from "react-native";
import { Row, Info, ActionText, Description, Title } from ".";

interface SettingsOptionProps {
  accent: string,
  title: string,
  description: string,
  actionName?: string
  onPress: () => void;
};

const SettingsOption: FC<SettingsOptionProps> = ({
  accent,
  title,
  description,
  actionName = "Execute",
  onPress
}) => {

  return (
    <Row>
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Info>
      <Pressable onPress={onPress}>
        <ActionText $accent={accent}>{actionName}</ActionText>
      </Pressable>
    </Row>
  );
};

export default SettingsOption;