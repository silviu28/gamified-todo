import { FC, ReactNode } from "react";
import { styled } from "styled-components/native";

const Bar = styled.View<{ $theme: string, $accent: string }>`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-top-width: 1px;
  border-top-color: ${({ $accent }) => $accent};
  padding: 10px;
  background-color: ${({ $theme }) => ($theme === "dark" ? "#000000CC" : "#FFFFFFCC")};
`;


interface BottomBarProps {
  theme: string;
  accent: string;
  children?: ReactNode | ReactNode[];
};

const BottomBar: FC<BottomBarProps> = ({ theme, accent, children }) => {
  return (
    <Bar $theme={theme} $accent={accent}>
      {children}
    </Bar>
  );
};

export default BottomBar;