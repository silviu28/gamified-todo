const TIERING = [
  {
    tier: 1,
    tasks: 20,
    xp: 500
  },
  {
    tier: 2,
    tasks: 50,
    xp: 1200
  },
  {
    tier: 3,
    tasks: 100,
    xp: 2500,
  },
  {
    tier: 4,
    tasks: 200,
    xp: 5000
  },
  {
    tier: 5,
    tasks: 500,
    xp: 10000
  },
  {
    tier: 6,
    tasks: 1000,
    xp: 20000
  }
];

// return the current tier, the required task and xp count to raise tier 
function computeTier(tasksCount: number, consolidatedXp: number): 
  [tier: number, requiredTaskCount: number, requiredXpCount: number] {
  // TODO
  let tier = 0;
  let tasksSpent = 0;
  let xpSpent = 0;
  
  while (tasksCount - tasksSpent >= 0 && consolidatedXp - xpSpent >= 0) {
    ++tier;
    tasksSpent += TIERING[tier - 1].tasks;
    xpSpent += TIERING[tier - 1].xp;
  }

  return [tier, TIERING[tier - 1].tasks, TIERING[tier - 1].xp];
}

export default computeTier;