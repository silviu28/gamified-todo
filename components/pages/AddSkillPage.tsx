import { FunctionComponent, useContext } from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";
import AddSkillForm from "../forms/AddSkillForm";
import { useNavigate } from "react-router-native";
import { useDispatch, useSelector } from "react-redux";
import { DispatchFunction, State } from "@/app/store";
import { addSkill, removeSkill } from "@/app/skillsSlice";
import SkillContainer from "../atoms/SkillContainer";
import FadeInWrapper from "../FadeInWrapper";
import ThemeContext from "@/app/context/ThemeContext";
import { skills as skillsTable } from "@/db/schema";
import { db } from "@/db";
import { Skill } from "@/types";
import { eq } from "drizzle-orm";

const AddSkillPage: FunctionComponent = () => {
  const style = useContext(ThemeContext);
  const skills = useSelector((state: State) => state.skills.allSkills);
  const dispatch: DispatchFunction = useDispatch();

  const navigate = useNavigate();

  const onSubmit = (name: string) => {
    db.insert(skillsTable)
      .values({ name, pts: 0 })
      .returning()
      .then(([ins]) => dispatch(addSkill(ins)));
  };

  const onRemove = (item: Skill) => {
    db.delete(skillsTable)
      .where(eq(skillsTable.id, item.id))
      .returning()
      .then(([rem]) => dispatch(removeSkill(rem)));
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
          <AddSkillForm onSubmit={onSubmit} style={style} />

          <FlatList
            data={skills}
            scrollEnabled={false}
            keyExtractor={skill => skill.name}
            renderItem={({ item }) =>
              <View>
                <SkillContainer
                  style={style}
                  skill={item}
                  onRemove={() => onRemove(item)}
                />
              </View>
            }
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