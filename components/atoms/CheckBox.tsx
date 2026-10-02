import { FC, useState } from "react";
import { styled } from "styled-components/native";

interface CheckBoxProps {
  accent: string;
  onCheck: (value: boolean) => void;
}; 

const Checkbox = styled.Pressable<{ $accent: string, $checked: boolean }>`
  width: 18px;
  height: 18px;
  border-width: 2px;
  border-radius: 3px;
  border-color: ${({ $accent }) => $accent};
  background-color: ${({ $checked, $accent }) => $checked ? $accent : "transparent"};
`;

const CheckBox: FC<CheckBoxProps> = ({ accent, onCheck }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const check = () => {
    onCheck(checked);
    setChecked(!checked);
  };

  return (
    <Checkbox
      onPress={check}
      $accent={accent}
      $checked={checked}
    />
  );
};

export default CheckBox;