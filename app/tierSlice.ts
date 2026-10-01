import computeTier from "@/utils/computeTier";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const tierSlice = createSlice({
  name: "tier",
  initialState: {
    tier: 0,
    tasksCount: 0,
    consolidatedXp: 0,
    loaded: false
  },
  reducers: {
    hydrateTier(_state, action: PayloadAction<{
      tier: number,
      tasksCount: number,
      consolidatedPts: 0,
    }>) {
      return {
        tier: action.payload.tier,
        tasksCount: action.payload.tasksCount,
        consolidatedXp: action.payload.consolidatedPts,
        loaded: true,
      };
    },
    increaseTier(state) {
      ++state.tier;
    },
    decreaseTier(state) {
      --state.tier;
    },
    addStats(state, action: PayloadAction<{ taskCount: number, pts: number }>) {
      const { taskCount, pts } = action.payload;
      state.tasksCount += taskCount;
      state.consolidatedXp += pts;
    },
    decayTier: (state, action: PayloadAction<{ taskCountDecay: number, ptsDecay: number }>) => {
      // after some time, decay consolidated stats to demote player for inactivity
      const { taskCountDecay, ptsDecay } = action.payload;
      state.tasksCount -= taskCountDecay;
      state.consolidatedXp -= ptsDecay;

      const [tier] = computeTier(state.tasksCount, state.consolidatedXp);
      state.tier = tier;
    },
    clearTier(state) {
      state.tier = 0;
      state.consolidatedXp = 0;
      state.tier = 0;
    },
  }
});

export const { hydrateTier, increaseTier, decreaseTier, addStats, decayTier, clearTier } = tierSlice.actions;
export default tierSlice.reducer;