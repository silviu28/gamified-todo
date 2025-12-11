import { FC } from "react";
import { Pressable } from "react-native";
import LeftArrowIcon from "./icons/LeftArrowIcon";
import { useNavigate } from "react-router-native";

const PersistentBackButton: FC = () => {
  const navigate = useNavigate();

  return (
    <Pressable
      style={{ position: "fixed", left: 10, top: 75, zIndex: 2, width: 20 }}
      onPress={() => navigate(-1)}>
      <LeftArrowIcon />
    </Pressable>
  );
};

export default PersistentBackButton;