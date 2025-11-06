import { checkBoxChecked, checkBoxUnchecked } from "@/constants/styles";
import { FC, useState } from "react";
import { Pressable, View } from "react-native";

interface CheckBoxProps {
  onCheck: (value: boolean) => void;
}; 
const CheckBox: FC<CheckBoxProps> = ({ onCheck }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const check = () => {
    onCheck(checked);
    setChecked(!checked);
  };

  return (
    <Pressable
      style={checked ? checkBoxChecked : checkBoxUnchecked}
      onPress={check}
    />
  );
};

export default CheckBox;