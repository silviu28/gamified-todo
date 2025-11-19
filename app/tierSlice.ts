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
    addStats: (state, action) => {
      const { taskCount, xp } = action.payload;
      state.tasksCount += taskCount;
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
    clearTier: (state) => {
      state.tier = 0;
      state.consolidatedXp = 0;
      state.tier = 0;
    },
  }
});

export const { increaseTier, decreaseTier, addStats, decayTier, clearTier } = tierSlice.actions;
export default tierSlice.reducer;