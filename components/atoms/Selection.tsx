import { FC } from "react";
import { Pressable } from "react-native";
import{ styled }from "styled-components/native";

interface SelectionProps {
  theme: string;
  accent: string;
  value: boolean;
  text: string;
  onSelect: () => void;
};

const SelectText = styled.Text<{ $theme: string, $accent: string, $selected: boolean }>`
  color: ${({ $theme, $accent, $selected }) =>
    $selected
      ? ($theme === "dark" ? "#fff" : "#000")
      : $accent
  };
`;

const Selection: FC<SelectionProps> = ({ theme, accent, value, text, onSelect }) => {
  return (
    <Pressable onPress={onSelect}>
      <SelectText $theme={theme} $accent={accent} $selected={value}>
        {text}
      </SelectText>
    </Pressable>
  );
};

export default Selection;