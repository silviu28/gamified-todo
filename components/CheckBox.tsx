import ThemeContext from "@/app/context/ThemeContext";
import { FC, useContext, useState } from "react";
import { Pressable } from "react-native";

interface CheckBoxProps {
  onCheck: (value: boolean) => void;
}; 

const CheckBox: FC<CheckBoxProps> = ({ onCheck }) => {
  const style = useContext(ThemeContext);
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