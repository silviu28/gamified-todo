import { FC, useContext, useState } from "react";
import { Alert, Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import GradientBackground from "./GradientBackground";
import { useDispatch, useSelector } from "react-redux";
import { State } from "@/app/store";
import ShareIcon from "./icons/ShareIcon";
import PencilIcon from "./icons/PencilIcon";
import StatsSummary from "./StatsSummary";
import { useNavigate } from "react-router-native";
import SkillRadarChart from "./SkillRadarChart";
import * as imgPick from "expo-image-picker";
import { setProfilePicture, setThumbnail, setUsername } from "@/app/preferencesSlice";
import ThemeContext from "@/app/context/ThemeContext";

const MePage: FC = () => {
  const style = useContext(ThemeContext);
  const prefs = useSelector((state: State) => state.preferences);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editingName, setEditingName] = useState<boolean>(false);
  const [writtenUsername, setWrittenUsername] = useState<string>(prefs.username);

  const pickImageFor = async (target: "profilePicture" | "thumbnail" ) => {
    const { status } = await imgPick.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Error", 
        "Please grant required permissions for this operation.");
    }

    const img = await imgPick.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (!img.canceled) {
      const base64Img = `data:image/jpeg;base64,${img.assets[0].base64}`;
      if (target === "profilePicture") {
        dispatch(
          setProfilePicture({ profilePicture: base64Img })
        );
      } else {
        dispatch(
          setThumbnail({ thumbnail: base64Img })
        );
      }
      console.log("your base64 image kind sire", prefs.profilePicture);
    }
  };

  const saveUsername = () => {
    dispatch(
      setUsername({ username: writtenUsername })
    );
    setEditingName(false);
  };

  return (
    <GradientBackground>
      <View style={{ position: "absolute", top: 60, right: 20, zIndex: 10 }}>
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <Pressable>
            <PencilIcon />
          </Pressable>
          <Pressable onPress={() => navigate("/share")}>
            <ShareIcon />
          </Pressable>
        </View>
      </View>

      <ScrollView style={style.colFlex}>
          <View>
            <Pressable onPress={() => pickImageFor("thumbnail")}>
              <Image
                style={{height: 200}}
                source={prefs.thumbnail 
                  ? { uri: prefs.thumbnail } 
                  : require('../assets/images/partial-react-logo.png')} 
              />
            </Pressable>
            <Pressable onPress={() => pickImageFor("profilePicture")}>
              <Image
                style={{width: 80, height: 80, top: -30, alignSelf: "center", borderRadius: 50}}
                source={prefs.profilePicture 
                  ? { uri: prefs.profilePicture } 
                  : require('../assets/images/icon.png')}
              />
            </Pressable>
          </View>

          { editingName
            ? (
              <View>
                <TextInput
                  style={style.textInput}
                  value={writtenUsername}
                  onChangeText={u => setWrittenUsername(u)}
                />
                <Pressable onPress={() => saveUsername()}>
                  <Text style={style.highlight}>save</Text>
                </Pressable>
              </View>)
            : (
              <Pressable onPress={() => setEditingName(true)}>
                <Text style={[style.heading, {alignSelf: "center", top: -20}]}>
                  {prefs.username}
                </Text>
              </Pressable>)}

        <StatsSummary />

        <Text />

        <View style={style.container}>
          <SkillRadarChart />
        </View>

      </ScrollView>

      <Text />


    </GradientBackground>
  );
};

export default MePage;