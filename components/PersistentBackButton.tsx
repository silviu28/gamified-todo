import { FC } from "react";
import { Pressable } from "react-native";
import { useNavigate } from "react-router-native";
import Icon from "./icons";

const PersistentBackButton: FC = () => {
  const navigate = useNavigate();

  return (
    <Pressable
      style={{ position: "fixed", left: 20, top: 60, zIndex: 2, width: 20, height: 0 }}
      onPress={() => navigate(-1)}>
      <Icon.LeftArrow />
    </Pressable>
  );
};

export default PersistentBackButton;