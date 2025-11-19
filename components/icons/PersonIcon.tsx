import { FC } from "react";
import Svg, { Path } from "react-native-svg";

const PersonIcon: FC = () => {
  return (
    <Svg width="16" height="16" fill="lime" className="bi bi-person-fill" viewBox="0 0 16 16">
      <Path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
    </Svg>
  );
};

export default PersonIcon;