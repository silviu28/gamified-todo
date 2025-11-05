import { FunctionComponent } from "react";
import { Pressable, Text, View } from "react-native";
import AddSkillForm from "./AddSkillForm";
import { useNavigate } from "react-router-native";
import { bgStyle, heading, highlight, p, padding } from "@/constants/styles";
import { Skill } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { DispatchFunction, State } from "@/app/store";
import { addSkill } from "@/app/skillsSlice";

const AddSkillPage: FunctionComponent = () => {
  const skills = useSelector((state: State) => state.skills.skills);
  const dispatch: DispatchFunction = useDispatch();

  const navigate = useNavigate();

  const onSubmit = (name: string, priority: number) => {
    const newSkill: Skill = {
      name,
      priority,
      requiredXp: 50,
      xp: 0,
      tasks: [],
      level: 1
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

        { skills?.map(skill => 
          <Text key={skill.name} style={p}>
            {skill.name}, {skill.priority}
          </Text>) }

        <Pressable onPress={() => navigate('/addTask')}>
          <Text style={highlight}>done</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddSkillPage;