import { FC } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import GradientBackground from "./GradientBackground";
import { useSelector } from "react-redux";
import { State } from "@/app/store";
import { colFlex, container, heading } from "@/constants/styles";
import ShareIcon from "./icons/ShareIcon";
import PencilIcon from "./icons/PencilIcon";
import StatsSummary from "./StatsSummary";
import { useNavigate } from "react-router-native";
import SkillRadarChart from "./SkillRadarChart";

const MePage: FC = () => {
  const prefs = useSelector((state: State) => state.preferences);
  const navigate = useNavigate();

  return (
    <GradientBackground>
      <View style={{position: "absolute", top: 60, right: 20, zIndex: 10 }}>
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <Pressable>
            <PencilIcon />
          </Pressable>
          <Pressable onPress={() => navigate("/share")}>
            <ShareIcon />
          </Pressable>
        </View>
      </View>

      <ScrollView style={colFlex}>
          <View>
            <Image
              style={{height: 200}}
              source={prefs.thumbnail 
                ? { uri: prefs.thumbnail } 
                : require('../assets/partial-react-logo.png')} 
            />
            <Image
              style={{width: 80, height: 80, top: -30, alignSelf: "center", borderRadius: 50}}
              source={prefs.profilePicture 
                ? { uri: prefs.thumbnail } 
                : require('../assets/icon.png')} 
            />
          </View>
          <Text style={[heading, {alignSelf: "center", top: -20}]}>{prefs.username}</Text>

        <StatsSummary />

        <Text />

        <View style={container}>
          <SkillRadarChart />
        </View>

      </ScrollView>

      <Text />


    </GradientBackground>
  );
};

export default MePage;