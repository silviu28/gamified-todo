import { FunctionComponent, useState } from "react";
import { Pressable, Text, View } from "react-native";
import AddSkillForm from "./AddSkillForm";
import { useNavigate } from "react-router-native";
import { bgStyle, heading, padding } from "@/constants/styles";

type Skill = {
  name: string,
  priority: number,
};

const AddSkillPage: FunctionComponent = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const navigate = useNavigate();

  const onSubmit = ({ name, priority }) => {
    setSkills([ ... skills, { name, priority }]);
  };

  return (
    <View style={bgStyle}>
      <View style={padding}>
        <Text style={heading}>Start by adding any skill (e.g. drawing, programming, doing dishes)</Text>
        <AddSkillForm onSubmit={onSubmit} />

        { skills?.map(skill => 
          <Text key={skill.name} style={{ color: 'white' }}>
            {skill.name}, {skill.priority}
          </Text>) }

        <Pressable onPress={() => navigate('/addTask')}>
          <Text style={{ color: 'lime' }}>done</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddSkillPage;