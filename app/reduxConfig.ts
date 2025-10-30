import { Skill } from "@/types";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const skillsSlice = createSlice({
  name: "skills",
  initialState: {
    skills: []
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

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: []
  },
  reducers: {}
});