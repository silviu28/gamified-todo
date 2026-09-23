import { FC } from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

interface IconProps {
  darkVariant?: boolean;
};

const PersonIcon: FC<IconProps> = ({ darkVariant }) => {
  return (
    <Svg width="16" height="16" fill={darkVariant ? "black" : "white"} className="bi bi-person-fill" viewBox="0 0 16 16">
      <Path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
    </Svg>
  );
};

const InfoIcon: FC<IconProps> = ({ darkVariant }) => {
  return (
    <Svg width="16" height="16" fill={darkVariant ? "black" : "white"} className="bi bi-info-circle" viewBox="0 0 16 16">
      <Path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
      <Path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
    </Svg>
  );
};

const LeftArrowIcon: FC<IconProps> = ({ darkVariant }) => {
  return (
    <Svg width="16" height="16" fill={darkVariant ? "black" : "white"} className="bi bi-arrow-left" viewBox="0 0 16 16">
      <Path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
    </Svg>
  );
};

const Pencil: FC<IconProps> = ({ darkVariant }) => {
  return (
    <Svg width="16" height="16" fill={darkVariant ? "black" : "white"} className="bi bi-pencil-fill" viewBox="0 0 16 16">
      <Path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
    </Svg>
  );
};

const SettingsIcon: FC<IconProps> = ({ darkVariant }) => {
  return (
    <View>
      <Svg width="16" height="16" fill={darkVariant ? "black" : "white"} className="bi bi-gear-wide-connected" viewBox="0 0 16 16">
        <Path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5m0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78zM5.048 3.967l-.087.065zm-.431.355A4.98 4.98 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8zm.344 7.646.087.065z"/>
      </Svg>
    </View>
  );
};

const ShareIcon: FC<IconProps> = ({ darkVariant }) => {
  return (
    <Svg width="16" height="16" fill={darkVariant ? "black" : "white"} className="bi bi-share-fill" viewBox="0 0 16 16">
      <Path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/>
    </Svg>
  );
};

const SmileyIcon = ({ darkVariant }: { darkVariant?: boolean }) => {
  return (
    <Svg width="16" height="16" fill={darkVariant ? "black" : "white"} className="bi bi-emoji-smile" viewBox="0 0 16 16">
      <Path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
      <Path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
    </Svg>
  );
};

const StatsIcon: FC<IconProps> = ({ darkVariant }) => {
  return (
    <Svg width="16" height="16" fill={darkVariant ? "black" : "white"} className="bi bi-bar-chart-steps" viewBox="0 0 16 16">
      <Path d="M.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 .5 0M2 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z"/>
    </Svg>
  );
};

const TrophyIcon: FC<IconProps> = ({ darkVariant }) => {
  return (
    <Svg width="16" height="16" fill={darkVariant ? "black" : "white"} className="bi bi-trophy-fill" viewBox="0 0 16 16">
      <Path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935"/>
    </Svg>
  );
};

const UpArrowIcon: FC<IconProps> = ({ darkVariant }) => {
  return (
  <Svg width="16" height="16" fill={darkVariant ? "black" : "white"} className="bi bi-arrow-up" viewBox="0 0 16 16">
    <Path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
  </Svg>
  );
};

const CheckboxIcon: FC<IconProps> = ({ darkVariant }) => {
  return (
    <Svg width="16" height="16" fill={darkVariant ? "black" : "white"} className="bi bi-check-square" viewBox="0 0 16 16">
      <Path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
      <Path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
    </Svg>
  );
};

export default class Icon {
  static Pencil = ({ darkVariant }: { darkVariant?: boolean }) => <Pencil darkVariant />;
  static Info = ({ darkVariant }: { darkVariant?: boolean }) => <InfoIcon darkVariant />;
  static LeftArrow = ({ darkVariant }: { darkVariant?: boolean }) => <LeftArrowIcon darkVariant />;
  static UpArrow = ({ darkVariant }: { darkVariant?: boolean }) => <UpArrowIcon darkVariant />;
  static Person = ({ darkVariant }: { darkVariant?: boolean }) => <PersonIcon darkVariant />;
  static Settings = ({ darkVariant }: { darkVariant?: boolean }) => <SettingsIcon darkVariant />;
  static Share = ({ darkVariant }: { darkVariant?: boolean }) => <ShareIcon darkVariant />;
  static Smiley = ({ darkVariant }: { darkVariant?: boolean }) => <SmileyIcon darkVariant />;
  static Stats = ({ darkVariant }: { darkVariant?: boolean }) => <StatsIcon darkVariant />;
  static Trophy = ({ darkVariant }: { darkVariant?: boolean }) => <TrophyIcon darkVariant />;
  static Checkbox = ({ darkVariant }: { darkVariant?: boolean }) => <CheckboxIcon darkVariant />;
};