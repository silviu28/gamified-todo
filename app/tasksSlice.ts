import { Task } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// use this to manage the to-do list
const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    // and a list of tasks that have to be done right now
    tasksToDo: [] as Task[],
    completedTasks: [] as Task[],
  },
  // same as the skills slice, define logic to manage the tasks here
  reducers: {
    assignTask: (state, action: PayloadAction<Task>) => {
      const task = action.payload;
      if (!state.tasksToDo.find(t => t.name === task.name)) {
        state.tasksToDo.push(task);
      }
    },
    dismissOrCompleteTask: (state, action) => {
      const { task } = action.payload;
      const completedTask = state.tasksToDo
        .find(t => task.name === t.name);
      if (completedTask) {
        state.completedTasks.push(completedTask);
        state.tasksToDo = state.tasksToDo
          .filter(task => task.name !== completedTask.name);
      }
    },
    dismissAllTasks: (state) => {
      state.completedTasks = [... state.tasksToDo];
      state.tasksToDo = [];
    },
    pruneCompletedTasks: (state) => {
      state.completedTasks = [];
    },
  }
});

export const { assignTask, dismissOrCompleteTask, dismissAllTasks, pruneCompletedTasks } = tasksSlice.actions;
export default tasksSlice.reducer;