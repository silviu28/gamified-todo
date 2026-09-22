import { Theme } from "@/types";
import { FC } from "react";
import { Pressable, Text } from "react-native";

interface SelectionProps {
  style: Theme,
  value: boolean;
  text: string;
  onSelect: () => void;
};

const Selection: FC<SelectionProps> = ({ style, value, text, onSelect }) => {
  return (
    <Pressable onPress={onSelect}>
      <Text style={value ? style.selectionSelected : style.selectionUnselected}>
        {text}
      </Text>
    </Pressable>
  );
};

export default Selection;