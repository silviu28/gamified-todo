import { FC, useContext, useState } from "react";
import { Alert, Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import GradientBackground from "../GradientBackground";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { State } from "@/app/store";
import Icon from "../icons";
import { useNavigate } from "react-router-native";
import SkillRadarChart from "../atoms/SkillRadarChart";
import * as imgPick from "expo-image-picker";
import { setProfilePicture, setThumbnail, setUsername } from "@/app/preferencesSlice";
import ThemeContext from "@/app/context/ThemeContext";
import { db } from "@/db";
import { preferences } from "@/db/schema";
import { eq } from "drizzle-orm";
import StatsSummary from "../atoms/StatsSummary";

const MePage: FC = () => {
  const style = useContext(ThemeContext);
  const { prefs, skills, theme } = useSelector((state: State) => ({
    skills: state.skills.allSkills,
    prefs: state.preferences,
    theme: state.preferences.theme,
  }), shallowEqual);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const defaultImage = require('../../assets/images/partial-react-logo.png');

  const [editingName, setEditingName] = useState<boolean>(false);
  const [writtenUsername, setWrittenUsername] = useState<string>(prefs.username);

  const pickImageFor = async (target: "profilePicture" | "thumbnail" ) => {
    const { status } = await imgPick.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Error", 
        "Please grant required permissions for this operation."
      );
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
        await db.update(preferences)
          .set({ profilePicture: base64Img })
          .where(eq(preferences._id, 1));
        
        dispatch (
          setProfilePicture(base64Img)
        );
      } else {
        await db.update(preferences)
          .set({ thumbnail: base64Img })
          .where(eq(preferences._id, 1));

        dispatch (
          setThumbnail(base64Img)
        );
      }
      console.log("your base64 image kind sire", prefs.profilePicture);
    }
  };

  const saveUsername = async () => {
    await db.update(preferences)
      .set({ username: writtenUsername })
      .where(eq(preferences._id, 1))
      
    dispatch (
      setUsername({ username: writtenUsername })
    );
    setEditingName(false);
  };

  return (
    <GradientBackground prefs={prefs}>
      <View style={{ position: "absolute", top: 22, right: 20, zIndex: 10, padding: 10 }}>
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <Pressable>
            <Icon.Pencil />
          </Pressable>
          <Pressable onPress={() => navigate("/share")}>
            <Icon.Share />
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
                  : defaultImage} 
              />
            </Pressable>
            <Pressable onPress={() => pickImageFor("profilePicture")}>
              <Image
                style={{width: 80, height: 80, top: -30, alignSelf: "center", borderRadius: 50}}
                source={prefs.profilePicture 
                  ? { uri: prefs.profilePicture } 
                  : defaultImage}
              />
            </Pressable>
          </View>

          {editingName
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
              </View>
            )
            : (
              <Pressable onPress={() => setEditingName(true)}>
                <Text style={[style.heading, { alignSelf: "center", top: -20 }]}>
                  {prefs.username}
                </Text>
              </Pressable>
          )}

        <StatsSummary theme={theme} skills={skills} />

        <Text />

        <View style={style.container}>
          <SkillRadarChart skills={skills} accent={prefs.accent} />
        </View>

      </ScrollView>
      <Text />
    </GradientBackground>
  );
};

export default MePage;