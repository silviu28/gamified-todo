import { FunctionComponent } from "react";
import { FlatList, Pressable, View } from "react-native";
import AddSkillForm from "../forms/AddSkillForm";
import { useNavigate } from "react-router-native";
import { shallowEqual, useDispatch } from "react-redux";
import { useStateSelector } from "@/app/store";
import { addSkill, removeSkill } from "@/app/skillsSlice";
import SkillContainer from "../atoms/SkillContainer";
import FadeInWrapper from "../FadeInWrapper";
import { skills as skillsTable } from "@/db/schema";
import { db } from "@/db";
import { Skill } from "@/types";
import { eq } from "drizzle-orm";
import { Content, Headline, Actions, PrimaryButton, PrimaryButtonText, EmptyState, Scroll, SecondaryButton, SecondaryButtonText, SkillList, SkillRow, Lede } from "../atoms";

const AddSkillPage: FunctionComponent = () => {
  const [theme, accent, skills] = useStateSelector((state) => [
    state.preferences.theme,
    state.preferences.accent,
    state.skills.allSkills
  ], shallowEqual);
  const dispatch = useDispatch();
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
      <Scroll showsVerticalScrollIndicator={false}>
        <Content $theme={theme}>
          <View style={{ padding: 54 }}></View>
          <Headline $theme={theme}>1.</Headline>
          <Lede>
            Start by adding any skill: drawing, programming, doing dishes,
            whatever you want to grow.
          </Lede>
 
          <AddSkillForm
            theme={theme}
            accent={accent}
            onSubmit={onSubmit} 
          />
 
          <SkillList>
            {skills.length === 0 ? (
              <EmptyState>No skills added yet.</EmptyState>
            ) : (
              <FlatList
                data={skills}
                scrollEnabled={false}
                keyExtractor={(skill) => skill.name}
                renderItem={({ item }) => (
                  <SkillRow>
                    <SkillContainer
                      theme={theme}
                      skill={item}
                      onRemove={() => onRemove(item)}
                    />
                  </SkillRow>
                )}
              />
            )}
          </SkillList>
 
          <Actions>
            <PrimaryButton onPress={() => navigate("/addTask")} $accent={accent}>
              <PrimaryButtonText $theme={theme}>Done</PrimaryButtonText>
            </PrimaryButton>
 
            <Pressable onPress={() => navigate("/suggest")}>
              <SecondaryButton>
                <SecondaryButtonText>Need help?</SecondaryButtonText>
              </SecondaryButton>
            </Pressable>
          </Actions>
        </Content>
      </Scroll>
    </FadeInWrapper>
  );
};

export default AddSkillPage;