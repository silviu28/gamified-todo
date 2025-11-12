import { heading, highlight } from "@/constants/styles";
import { FC } from "react";
import { Pressable, Text } from "react-native";

interface SelectionProps {
  value: boolean;
  text: string;
  onSelect: () => void;
};

const Selection: FC<SelectionProps> = ({ value, text, onSelect }) => {
  return (
    <Pressable onPress={onSelect}>
      <Text style={value ? { ... highlight, color: "white" } : highlight}>
        {text}
      </Text>
    </Pressable>
  );
};

export default Selection;