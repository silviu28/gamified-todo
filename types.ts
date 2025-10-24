export type Skill = {
  name: string,
  priority: number,
};

export type Frequency = 'one-time' | 'daily' | 'weekly' | 'monthly' | 'yearly';

export type Priority = 'low' | 'average' | 'high';

export type Task = {
  task: string,
  priority: string,
  frequency: string,
};