import { Skill } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const skillsSlice = createSlice({
  name: "skills",
  initialState: {
    allSkills: [] as Skill[],
    loaded: false
  },
  reducers: {
    hydrateSkills(state, action: PayloadAction<Skill[]>) {
      state = {
        allSkills: action.payload,
        loaded: true
      };
    },
    addSkill(state, action: PayloadAction<Skill>) {
      const skill = action.payload as Skill;
      state.allSkills.push(skill)
    },
    removeSkill(state, action: PayloadAction<Skill>) {
      const { id } = action.payload;
      state.allSkills = state.allSkills
        .filter((skill) => skill.id !== id);
    },
    modifySkill(state, action: PayloadAction<Skill>) {
      const newSkill = action.payload;
      state.allSkills = state.allSkills
        .map(skill => skill.name === newSkill.name ? newSkill : skill);
    },
    levelSkills(state, action: PayloadAction<{ skill: Skill, pts: number }[]>) {
      for (let { skill, pts } of action.payload) {
        console.log("leveling skill by", pts);
        const existingSkill = state.allSkills
          .find((s) => s.id === skill.id);
        if (existingSkill) {
          existingSkill.pts += pts;
        }
      }
    },
    removeAllSkills(state) {
      state.allSkills = [];
    },
  }
});

export const { hydrateSkills, addSkill, removeSkill, modifySkill, levelSkills, removeAllSkills } = skillsSlice.actions;
export default skillsSlice.reducer;

