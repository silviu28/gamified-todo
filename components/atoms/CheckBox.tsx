import { Theme } from "@/types";
import { FC, useState } from "react";
import { Pressable } from "react-native";

interface CheckBoxProps {
  style: Theme,
  onCheck: (value: boolean) => void;
}; 

const CheckBox: FC<CheckBoxProps> = ({ style, onCheck }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const check = () => {
    onCheck(checked);
    setChecked(!checked);
  };

  return (
    <Pressable
      style={checked ? style.checkBoxChecked : style.checkBoxUnchecked}
      onPress={check}
    />
  );
};

export default CheckBox;