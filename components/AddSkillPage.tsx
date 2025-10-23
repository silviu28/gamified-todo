import { FunctionComponent } from "react";
import { Pressable, Text, View } from "react-native";
import AddSkillForm from "./AddSkillForm";
import { Link, useNavigate } from "react-router-native";

const onSubmit = () => {
};

const AddSkillPage: FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <View>
      <View>
        <Text>Start by adding any skill (e.g. drawing, programming, doing dishes)</Text>
      </View>
      <AddSkillForm onSubmit={onSubmit} />
      <Pressable onPress={() => navigate('/addTask')}>
          Done
      </Pressable>
    </View>
  );
};

export default AddSkillPage;