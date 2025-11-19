import { State } from "@/app/store";
import { bgStyle, container, heading, padding, sub } from "@/constants/styles";
import { FC } from "react";
import { Image, Text, View } from "react-native";
import { useSelector } from "react-redux";
import TrophyIcon from "./icons/TrophyIcon";

const MeCard: FC = () => {
  const prefs = useSelector((state: State) => state.preferences);
  const tier = useSelector((state: State) => state.tier);

  return (
    <View style={[bgStyle]}>
      <View style={[padding]}>

        <View style={{ ... container, flexDirection: "row", height: 400, alignItems: "center" }}>
          <View style={{ top: 60 }}>
          <Image
            style={{ width: 130 }}
            source={prefs.thumbnail 
              ? { uri: prefs.thumbnail } 
              : require('../assets/partial-react-logo.png')} 
          />
          <Image
            style={{width: 80, height: 80, top: "-55%", alignSelf: "center", borderRadius: 50}}
            source={prefs.profilePicture 
              ? { uri: prefs.thumbnail } 
              : require('../assets/icon.png')} 
          />
          <Text style={[heading, {top:"-50%", alignSelf: "center" }]}>
            {prefs.username}
          </Text>
          </View>

          <Text style={heading}>
            <TrophyIcon /> Tier {tier.tier}
          </Text>
        </View>
        <Text style={[sub, {textAlign: "center"}]}>
        screenshot this and share your progress with your friends.
      </Text>

      </View>
    </View>
  );
};

export default MeCard;