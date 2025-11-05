import { Task } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    // store both a list of all possible tasks,
    allTasks: [],
    // and a list of tasks that have to be done right now
    tasksToDo: [],
  },
  // same as the skills slice, define logic to manage the tasks here
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      const task = action.payload;
      state.allTasks.concat(task);
    },
    dismissTask: (state, action) => {
      const { name } = action.payload;
      state.tasksToDo = state.tasksToDo
        .filter(task => task.name === name);
    },
    removeTask: (state, action) => {
      const { name } = action.payload;
      state.allTasks = state.allTasks
        .filter(task => task.name === name);
      state.tasksToDo = state.allTasks
        .filter(task => task.name === name);
    },
    modifyTask: (state, action: PayloadAction<Task>) => {
      const newTask = action.payload;
      state.allTasks = state.allTasks
        .map(task => task.name === newTask.name ? newTask : task);
      state.tasksToDo = state.tasksToDo
        .map(task => task.name === newTask.name ? newTask : task);
    },
    completeTask: (state, action: PayloadAction<Task>) => {
      const completedTask = action.payload;
      state.tasksToDo = state.tasksToDo
        .filter(task => task.name === completedTask.name);
    }
  }
});

export const { addTask, dismissTask, removeTask, modifyTask, completeTask } = tasksSlice.actions;