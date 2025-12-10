import { bgStyle, heading, p, padding, rowFlex, sub } from "@/constants/styles";
import { FunctionComponent, useContext } from "react";
import { Pressable, Text, View } from "react-native";
import { Link } from "react-router-native";
import CheckboxIcon from "./icons/CheckboxIcon";
import UpArrowIcon from "./icons/UpArrowIcon";
import AnimatePage from "./AnimatePage";
import ThemeContext from "@/app/context/ThemeContext";

const HomePage: FunctionComponent = () => {
  return (
    <AnimatePage>
    <View style={bgStyle}>
      <View style={padding}>
        <Text style={heading}>welcome</Text>
        <Text style={p}>Bored of doing your daily mundane activities? Spice the process up by introducing rewards in experience, leveling and more using this app.</Text>
        <Pressable>

        <Text />
        <View style={[rowFlex, { justifyContent: "center" }]}>
          <View>
            <Text style={p}><CheckboxIcon /> Track your tasks</Text>
            <Text style={sub}>{`Keep yourself productive\nand organized by using a to-do list\nthat updates on your preferences.`}</Text>
          </View>
          <View>
            <Text style={p}><UpArrowIcon /> Level up</Text>
            <Text style={sub}>{`Remain motivated by\nsetting yourself skill caps\nyou want to achieve.`}</Text>
          </View>
        </View>
        <Text />

          <Link to='/addSkill'>
            <Text style={heading}>let&apos;s go</Text>
          </Link>
        </Pressable>
        <Pressable>
          <Link to='/main'>
            <Text style={heading}>skip</Text>
          </Link>
        </Pressable>
      </View>
    </View>
    </AnimatePage>
  );
};

export default HomePage;