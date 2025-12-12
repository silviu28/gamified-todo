import { FunctionComponent, useContext } from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";
import AddSkillForm from "./AddSkillForm";
import { useNavigate } from "react-router-native";
import { Skill } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { DispatchFunction, State } from "@/app/store";
import { addSkill } from "@/app/skillsSlice";
import SkillContainer from "./SkillContainer";
import FadeInWrapper from "./FadeInWrapper";
import ThemeContext from "@/app/context/ThemeContext";

const AddSkillPage: FunctionComponent = () => {
  const style = useContext(ThemeContext);
  const skills = useSelector((state: State) => state.skills.skills);
  const dispatch: DispatchFunction = useDispatch();

  const navigate = useNavigate();

  const onSubmit = (name: string, priority: number) => {
    const newSkill: Skill = {
      name,
      priority,
      xp: 0,
      tasks: [],
    };
    dispatch(addSkill(newSkill));
  };

  return (
    <FadeInWrapper>
      <ScrollView
          style={style.bg}
          showsVerticalScrollIndicator={false}>
        <View style={style.padding}>
          <Text style={style.heading}>
            Start by adding any skill (e.g. drawing, programming, doing dishes)
          </Text>
          <AddSkillForm onSubmit={onSubmit} />

          <FlatList
            data={skills}
            scrollEnabled={false}
            keyExtractor={skill => skill.name}
            renderItem={({ item }) =>
              <>
                <SkillContainer skill={item} removable />
                <Text style={style.p}>You selected priority {item.priority} for this skill.</Text>
              </>}
          />

          <Pressable onPress={() => navigate('/addTask')}>
            <Text style={style.highlight}>done</Text>
          </Pressable>
          <Pressable onPress={() => navigate('/suggest')}>
            <Text style={style.highlight}>need help?</Text>
          </Pressable>
        </View>
      </ScrollView>
    </FadeInWrapper>
  );
};

export default AddSkillPage;