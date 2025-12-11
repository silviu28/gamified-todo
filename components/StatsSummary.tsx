import { State } from "@/app/store";
import { FC } from "react";
import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import SkillContainer from "./SkillContainer";
import useDynamicTheme from "@/hooks/useDynamicTheme";

const StatsSummary: FC = () => {
  const style = useDynamicTheme();
  const skills = useSelector((state: State) => state.skills.skills);

  return (
    <View style={style.container}>
      <Text style={style.heading}>My stats:</Text>
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