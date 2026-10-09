import { FC } from "react";
import { Pressable } from "react-native";
import { useNavigate } from "react-router-native";
import Icon from "./icons";

const PersistentBackButton = ({ theme }: { theme: string }) => {
  const navigate = useNavigate();

  return (
    <Pressable
      style={{ position: "fixed", left: 20, top: 25, zIndex: 2, width: 20, height: 0 }}
      onPress={() => navigate(-1)}>
      <Icon.LeftArrow darkVariant={theme === "light"} />
    </Pressable>
  );
};

export default PersistentBackButton;