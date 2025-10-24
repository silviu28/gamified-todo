import { FunctionComponent } from "react";
import { Pressable, Text, View } from "react-native";
import AddSkillForm from "./AddSkillForm";
import { useNavigate } from "react-router-native";
import { bgStyle, heading, padding } from "@/constants/styles";

const onSubmit = () => {
};

const AddSkillPage: FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <View style={bgStyle}>
      <View style={padding}>
        <Text style={heading}>Start by adding any skill (e.g. drawing, programming, doing dishes)</Text>
        <AddSkillForm onSubmit={onSubmit} />
        <Pressable onPress={() => navigate('/addTask')}>
          <Text style={{ color: 'lime' }}>done</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddSkillPage;