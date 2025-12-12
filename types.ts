export type Skill = {
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
  creationDate: Date,
  skill: Skill,
};

export type Note = {
  title: string,
  content: string,
  creationDate: Date,
};