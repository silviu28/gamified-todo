import useDynamicTheme from "@/hooks/useDynamicTheme";
import { FC } from "react";
import { Pressable, Text } from "react-native";

interface SelectionProps {
  value: boolean;
  text: string;
  onSelect: () => void;
};

const Selection: FC<SelectionProps> = ({ value, text, onSelect }) => {
  const style = useDynamicTheme();

  return (
    <Pressable onPress={onSelect}>
      <Text style={value ? style.selectionSelected : style.selectionUnselected}>
        {text}
      </Text>
    </Pressable>
  );
};

export default Selection;