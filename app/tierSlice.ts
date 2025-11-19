import computeTier from "@/utils/computeTier";
import { createSlice } from "@reduxjs/toolkit";

const tierSlice = createSlice({
  name: "tier",
  initialState: {
    tier: 0,
    tasksCount: 0,
    consolidatedXp: 0,
  },
  reducers: {
    increaseTier: (state, _action) => {
      ++state.tier;
    },
    decreaseTier: (state, _action) => {
      --state.tier;
    },
    addFinishedTask: (state, _action) => {
      ++state.tasksCount;
    },
    addXp: (state, action) => {
      const xp: number = action.payload;
      state.consolidatedXp += xp;
    },
    decayTier: (state, action) => {
      // after some time, decay consolidated stats to demote player for inactivity
      const { taskCountDecay, xpDecay } = action.payload;
      state.tasksCount -= taskCountDecay;
      state.consolidatedXp -= xpDecay;

      const [tier] = computeTier(state.tasksCount, state.consolidatedXp);
      state.tier = tier;
    },
  }
});

export const { increaseTier, decreaseTier, addFinishedTask, addXp, decayTier } = tierSlice.actions;
export default tierSlice.reducer;