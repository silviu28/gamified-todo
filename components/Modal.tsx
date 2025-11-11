import { FC, ReactNode } from "react";
import { View } from "react-native";

interface ModalProps {
  isVisible: boolean,
  children?: ReactNode | ReactNode[]
};

const Modal: FC<ModalProps> = ({ isVisible, children }) => {
  if (!isVisible) return;

  return (
    <View style={{ position: 'fixed', left: '50%', top: '50%' }}>
      {children}
    </View>
  );
};

export default Modal;