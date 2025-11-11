// return the current level, the xp collected for passing current level, and required xp to pass it
function computeLevel(xp: number): [number, number, number] {
  const baseXp = 50;
  const growth = 1.2;

  let level = 1;
  let xpForNext = baseXp;
  let xpSpent = 0;

  while (xp >= xpSpent + xpForNext) {
    xpSpent += xpForNext;
    xpForNext *= growth;
    level++;
  }

  const currentXp = xp - xpSpent;
  const requiredXp = xpForNext;

  return [level, currentXp, requiredXp];
};

export default computeLevel;