import { FunctionComponent } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import AddSkillForm from "./AddSkillForm";
import { useNavigate } from "react-router-native";
import { bgStyle, heading, highlight, p, padding } from "@/constants/styles";
import { Skill } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { DispatchFunction, State } from "@/app/store";
import { addSkill } from "@/app/skillsSlice";
import SkillContainer from "./SkillContainer";

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
    <View style={bgStyle}>
      <View style={padding}>
        <Text style={heading}>
          Start by adding any skill (e.g. drawing, programming, doing dishes)
        </Text>
        <AddSkillForm onSubmit={onSubmit} />

        <FlatList
          data={skills}
          keyExtractor={skill => skill.name}
          renderItem={({ item }) =>
            <>
              <SkillContainer skill={item} />
              <Text style={p}>You selected priority {item.priority} for this skill.</Text>
            </>}
        />

        <Pressable onPress={() => navigate('/addTask')}>
          <Text style={highlight}>done</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddSkillPage;