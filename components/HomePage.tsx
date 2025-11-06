import { bgStyle, heading, p, padding } from "@/constants/styles";
import { FunctionComponent } from "react";
import { Pressable, Text, View } from "react-native";
import { Link } from "react-router-native";

const HomePage: FunctionComponent = () => {
  return (
    <View style={bgStyle}>
      <View style={padding}>
        <Text style={heading}>welcome</Text>
        <Text style={p}>Bored of doing your daily mundane activities? Spice the process up by introducing rewards in experience, leveling and more using this app.</Text>
        <Pressable>
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
  );
};

export default HomePage;