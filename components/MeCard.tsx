import { State } from "@/app/store";
import { FC, useContext } from "react";
import { Image, Text, View } from "react-native";
import { useSelector } from "react-redux";
import TrophyIcon from "./icons/TrophyIcon";
import SkillRadarChart from "./SkillRadarChart";
import ThemeContext from "@/app/context/ThemeContext";

const MeCard: FC = () => {
  const style = useContext(ThemeContext);
  const prefs = useSelector((state: State) => state.preferences);
  const tier = useSelector((state: State) => state.tier);

  return (
    <View style={[style.bg]}>
      <View style={style.padding}>

        <Image
          style={{
            width: "100%",
            height: 140,
            borderRadius: 12,
            marginBottom: -40,
          }}
          source={
            prefs.thumbnail
              ? { uri: prefs.thumbnail }
              : require("../assets/partial-react-logo.png")
          }
        />

        <View style={{ alignItems: "center" }}>
          <Image
            style={{
              width: 90,
              height: 90,
              borderRadius: 50,
              borderWidth: 3,
              borderColor: "#fff",
              backgroundColor: "#eee",
            }}
            source={
              prefs.profilePicture
                ? { uri: prefs.profilePicture }
                : require("../assets/icon.png")
            }
          />

          <Text style={[style.heading, { marginTop: 10 }]}>
            {prefs.username}
          </Text>

          <Text style={[style.sub, { fontSize: 18, marginTop: 4 }]}>
            <TrophyIcon /> Tier {tier.tier}
          </Text>
        </View>

        {/* Radar Chart */}
        <View style={[style.container, { marginTop: 20 }]}>
          <SkillRadarChart />
        </View>

        <Text style={[style.sub, { textAlign: "center", marginTop: 10 }]}>
          screenshot this and share your progress with your friends.
        </Text>

      </View>
    </View>
  );
};

export default MeCard;