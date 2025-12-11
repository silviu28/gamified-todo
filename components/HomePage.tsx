import { FC, useContext } from "react";
import { Pressable, Text, View } from "react-native";
import { Link } from "react-router-native";
import CheckboxIcon from "./icons/CheckboxIcon";
import UpArrowIcon from "./icons/UpArrowIcon";
import FadeInWrapper from "./FadeInWrapper";
import ThemeContext from "@/app/context/ThemeContext";
import SmileyIcon from "./icons/SmileyIcon";

const HomePage: FC = () => {
  const style = useContext(ThemeContext);

  return (
    <FadeInWrapper>
      <View style={style.bg}>
        <View style={style.padding}>
          <Text style={style.heading}>welcome</Text>
          <Text style={style.p}>Bored of doing your daily mundane activities? Spice the process up by introducing rewards in experience, leveling and more using this app.</Text>
          <Pressable>

          <Text />
          <View style={[style.rowFlex, { alignSelf: "center", justifyContent: "center", width: "95%" }]}>
            <View style={{ flex: 1 }}>
              <Text style={style.p}><CheckboxIcon /> Track your tasks</Text>
              <Text style={style.sub}>{`Keep yourself productive and organized by using a to-do list that updates on your preferences.`}</Text>
            </View>
            
            <View style={{ flex: 1 }}>
              <Text style={style.p}><UpArrowIcon /> Level up</Text>
              <Text style={style.sub}>{`Remain motivated by setting yourself skill caps you want to achieve.`}</Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={style.p}><SmileyIcon /> Motivate yourself</Text>
              <Text style={style.sub}>{`See yourself progress in a tangible way. Share your progress using personalized stat cards.`}</Text>
            </View>
          </View>
          <Text />

          <Link to='/addSkill'>
            <Text style={style.heading}>let&apos;s go</Text>
          </Link>
          </Pressable>
          <Pressable>
            <Link to='/main'>
              <Text style={style.heading}>skip</Text>
            </Link>
          </Pressable>
        </View>
      </View>
      </FadeInWrapper>
  );
};

export default HomePage;