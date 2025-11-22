import { FunctionComponent } from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";
import AddSkillForm from "./AddSkillForm";
import { useNavigate } from "react-router-native";
import { bgStyle, heading, highlight, p, padding } from "@/constants/styles";
import { Skill } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { DispatchFunction, State } from "@/app/store";
import { addSkill } from "@/app/skillsSlice";
import SkillContainer from "./SkillContainer";
import AnimatePage from "./AnimatePage";

const AddSkillPage: FunctionComponent = () => {
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
    <AnimatePage>
      <ScrollView
          style={bgStyle}
          showsVerticalScrollIndicator={false}>
        <View style={padding}>
          <Text style={heading}>
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
                <Text style={p}>You selected priority {item.priority} for this skill.</Text>
              </>}
          />

          <Pressable onPress={() => navigate('/addTask')}>
            <Text style={highlight}>done</Text>
          </Pressable>
        </View>
      </ScrollView>
    </AnimatePage>
  );
};

export default AddSkillPage;