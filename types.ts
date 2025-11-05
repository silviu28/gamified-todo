export type Skill = {
  level: number,
  requiredXp: number,
  xp: number,
  name: string,
  priority: number,
  tasks: Task[],
};

export type Frequency = 'one-time' | 'daily' | 'weekly' | 'monthly' | 'yearly';

export type Priority = 'low' | 'average' | 'high';

export type Task = {
  name: string,
  priority: string,
  frequency: string,
  xp: number,
};