import { FC } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import GradientBackground from "./GradientBackground";
import { useSelector } from "react-redux";
import { State } from "@/app/store";
import { colFlex, heading } from "@/constants/styles";
import ShareIcon from "./icons/ShareIcon";
import PencilIcon from "./icons/PencilIcon";
import StatsSummary from "./StatsSummary";
import TierContainer from "./TierContainer";

const MePage: FC = () => {
  const prefs = useSelector((state: State) => state.preferences);

  return (
    <GradientBackground>
      <View style={{position: "absolute", top: 60, right: 20 }}>
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <Pressable>
            <PencilIcon />
          </Pressable>
          <Pressable>
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
      </ScrollView>


    </GradientBackground>
  );
};

export default MePage;