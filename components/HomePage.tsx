import { bgStyle, heading, padding } from "@/constants/styles";
import { FunctionComponent } from "react";
import { Pressable, Text, View, ViewStyle } from "react-native";
import { Link } from "react-router-native";

const HomePage: FunctionComponent = () => {
  return (
    <View style={bgStyle}>
      <View style={padding}>
        <Text style={heading}>welcome</Text>
        <Text style={{ color: 'white' }}>Bored of doing your daily mundane activities? Spice the process up by introducing rewards in experience, leveling and more using this app.</Text>
        <Pressable>
          <Link to='/addSkill'>
            <Text style={{ color: 'lime' }}>let's go</Text>
          </Link>
        </Pressable>
      </View>
    </View>
  );
};

export default HomePage;