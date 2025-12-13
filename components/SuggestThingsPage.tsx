import { FC, useContext, useState } from "react";
import FadeInWrapper from "./FadeInWrapper";
import GradientBackground from "./GradientBackground";
import { Pressable, Text, View } from "react-native";
import ThemeContext from "@/app/context/ThemeContext";
import getSuggestion from "@/utils/getSuggestion";
import { useDispatch } from "react-redux";
import { addSkill } from "@/app/skillsSlice";
import { Skill } from "@/types";
import { useNavigate } from "react-router-native";

const SuggestThingsPage: FC = () => {
  const style = useContext(ThemeContext);
  const [suggestedSkill, setSuggestedSkill] = useState<Skill>();
  const [outputMessage, setOutputMessage] = useState<string>("");
  const [errorOccured, setErrorOccured] = useState<boolean>(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addSuggestdSkill = (onlySkill = true) => {
    if (onlySkill) {
      setSuggestedSkill({
        ... suggestedSkill,
        tasks: []
      });
    }
    dispatch(addSkill(suggestedSkill));
    navigate("/main");
  };

  const showSuggestion = async () => {
    try {
      setOutputMessage("loading...");

      const response = await getSuggestion();
      const responseString = new String()
        .concat("Skill: ", response.type)
        .concat("\n")
        .concat("Task: ", response.activity)
        .concat("\n")
        .concat("Availability index: ", response.availability.toString())
        .concat("\n")
        .concat("Price index: ", response.price.toString())
        .concat("\n")
        .concat("Family friendly: ", response.kidFriendly ? "yes" : "no")
        .concat("\n")
        .concat("Frequency: one-time")
        .concat("\n")
        .concat("Importance: ", response.duration === "minutes" ? "low" : "average");

      const suggestedSkill = {
        xp: 0,
        name: response.type,
        priority: response.accessibility === "Major challenges" ? 3 : 2,
        tasks: [],
      };
      suggestedSkill.tasks = [
        {
            name: response.activity,
            frequency: "one-time",
            creationDate: new Date(),
            priority: response.duration === "minutes" ? "low" : "average",
            xp: 0,
          }
      ];

      setSuggestedSkill(suggestedSkill);

      setOutputMessage(responseString);
      setErrorOccured(false);
    } catch (_error) {
      setErrorOccured(true);
    }

  };

  return (
    <FadeInWrapper>
      <View style={style.bg}>
        <View style={style.padding}>
          <Text style={style.heading}>not in a creative mood?</Text>
          <Text style={style.p}>consider getting some suggestions from online.</Text>
          <Pressable onPress={() => showSuggestion()}>
            <Text style={style.highlight}>
              try it!
            </Text>
          </Pressable>
          <Text style={style.p}>{outputMessage}</Text>
          {(!errorOccured && suggestedSkill) &&
            <>
              <Pressable onPress={() => addSuggestdSkill()}>
                <Text style={style.highlight}>seems good!</Text>
              </Pressable>
              <Pressable onPress={() => addSuggestdSkill(true)}>
                <Text style={style.highlight}>just the skill</Text>
              </Pressable>
            </>}
          <Pressable onPress={() => navigate("/main")}>
            <Text style={style.highlight}>
              continue
            </Text>
          </Pressable>

          <Text style={style.sub}>powered by bored-api.</Text>
          <Text style={style.sub}>suggestions might be rate limited depending on your usage</Text>
        </View>
      </View>
    </FadeInWrapper>
  );
};

export default SuggestThingsPage;