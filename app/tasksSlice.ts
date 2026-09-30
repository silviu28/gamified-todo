import { Task } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// use this to manage the to-do list
const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    // and a list of tasks that have to be done right now
    allTasks: [] as Task[],
    tasksToDo: [] as Task[],
    completedTasks: [] as Task[],
    loaded: false,
  },
  // same as the skills slice, define logic to manage the tasks here
  reducers: {
    hydrateTasks(state, action: PayloadAction<{ allTasks: Task[], tasksToDo: Task[], completedTasks: Task[] }>) {
      state = {
        ...action.payload,
        loaded: true
      };
    },
    addTask(state, action: PayloadAction<Task>) {
      state.tasksToDo.push(action.payload);
    },
    removeTask(state, action: PayloadAction<Task>) {
      state.tasksToDo = state.tasksToDo.filter((task) => task.id !== action.payload.id);
    },
    assignTask(state, action: PayloadAction<Task>) {
      const task = action.payload;
      if (!state.tasksToDo.find((t) => t.id === task.id)) {
        state.tasksToDo.push(task);
      }
    },
    dismissOrCompleteTask(state, action: PayloadAction<Task>) {
      const task = action.payload;
      const completedTask = state.tasksToDo
        .find((t) => task.id === t.id);
      if (completedTask) {
        state.completedTasks.push(completedTask);
        state.tasksToDo = state.tasksToDo
          .filter((task) => task.name !== completedTask.name);
      }
    },
    dismissAllTasks(state) {
      state.completedTasks = [... state.tasksToDo];
      state.tasksToDo = [];
    },
    pruneCompletedTasks(state) {
      state.completedTasks = [];
    },
  }
});

export const { hydrateTasks, addTask, removeTask, assignTask, dismissOrCompleteTask, dismissAllTasks, pruneCompletedTasks } = tasksSlice.actions;
export default tasksSlice.reducer;