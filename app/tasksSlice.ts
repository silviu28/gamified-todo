import { Task } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// use this to manage the to-do list
const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    // and a list of tasks that have to be done right now
    tasksToDo: [] as Task[],
  },
  // same as the skills slice, define logic to manage the tasks here
  reducers: {
    assignTask: (state, action: PayloadAction<Task>) => {
      const task = action.payload;
      state.tasksToDo.push(task);
    },
    dismissOrCompleteTask: (state, action) => {
      const { name } = action.payload;
      state.tasksToDo = state.tasksToDo
        .filter(task => task.name === name);
    },
  }
});

export const { assignTask, dismissOrCompleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;