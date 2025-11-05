import { Skill } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const skillsSlice = createSlice({
  name: "skills",
  initialState: {
    skills: [] as Skill[]
  },
  reducers: {
    addSkill: (state, action) => {
      const skill = action.payload as Skill;
      state.skills = state.skills.concat(skill);
    },
    removeSkill: (state, action) => {
      const { name } = action.payload as Skill;
      state.skills = state.skills
        .filter(skill => skill.name !== name);
    },
    modifySkill: (state, action) => {
      const newSkill = action.payload as Skill;
      state.skills = state.skills
        .map(skill => skill.name === newSkill.name ? newSkill : skill);
    },
  }
});

export const { addSkill, removeSkill, modifySkill } = skillsSlice.actions;
export default skillsSlice.reducer;

