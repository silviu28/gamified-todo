import { Skill } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

// because each task is a child of its skill, task integrity is managed in this slice.
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
    levelSkill: (state, action) => {
      const { skill, xp } = action.payload;
      console.log("leveling skill by", xp);
      const existingSkill = state.skills
        .find(s => s.name === skill.name);
      if (existingSkill) {
        existingSkill.xp += xp;
      }
    },
    addTask: (state, action) => {
      const { skill, task } = action.payload;
      const existingSkill = state.skills
        .find(s => s.name === skill.name);
      if (existingSkill) {
        existingSkill.tasks = existingSkill.tasks
          .concat(task);
      }
    },
    removeTask: (state, action) => {
      const { skill, task } = action.payload;
      const existingSkill = state.skills
        .find(s => s.name === skill.name);
      if (existingSkill) {
        existingSkill.tasks = existingSkill.tasks
          .filter(t => t.name !== task.name);
      }
    },
    modifyTask: (state, action) => {
      const { skill, task } = action.payload;
      const existingSkill = state.skills
        .find(s => s.name === skill.name);
      if (existingSkill) {
        existingSkill.tasks = existingSkill.tasks
          .map(t => t.name === task.name ? task : t);
      }
    },
  }
});

export const { addSkill, removeSkill, modifySkill, levelSkill, addTask, removeTask, modifyTask } = skillsSlice.actions;
export default skillsSlice.reducer;

