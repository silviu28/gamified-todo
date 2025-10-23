import { FunctionComponent } from "react";
import { Pressable, Text, View, ViewStyle } from "react-native";
import { Link } from "react-router-native";

const style: ViewStyle = {
  padding: 20,
  display: 'flex',
  backgroundColor: 'green',
}

const HomePage: FunctionComponent = () => {
  return (
    <View style={style}>
      <Text>welcome</Text>
      <Text>Bored of doing your daily mundane activities? Spice the process up by introducing rewards in experience, leveling and more using this app.</Text>
      <Pressable>
        <Link to='/addSkill'>
          <Text>let's go</Text>
        </Link>
      </Pressable>
    </View>
  );
};

export default HomePage;