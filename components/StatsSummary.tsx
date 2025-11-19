import { State } from "@/app/store";
import { FC } from "react";
import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import SkillContainer from "./SkillContainer";
import { container, heading } from "@/constants/styles";

const StatsSummary: FC = () => {
  const skills = useSelector((state: State) => state.skills.skills);

  return (
    <View style={container}>
      <Text style={heading}>My stats:</Text>
      <FlatList
        data={skills}
        keyExtractor={skill => skill.name}
        scrollEnabled={false}
        renderItem={({ item }) => 
          <SkillContainer skill={item} />}
      />
    </View>
  );
};

export default StatsSummary;