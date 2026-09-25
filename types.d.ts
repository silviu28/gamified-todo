import useDynamicTheme from "./hooks/useDynamicTheme";

export type Theme = ReturnType<typeof useDynamicTheme>;

export type Skill = {
  xp: number,
  name: string,
  priority: number,
  tasks: Task[],
};

export type Preferences = {
  showStart: boolean,
  accent: string,
  theme: "dark" | "light",
  thumbnail: string,
  profilePicture: string,
  username: string,
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

export type BoredAPIResponse = {
  activity: string,
  availability: number,
  type: string,
  participants: number,
  price: number,
  accessibility: string,
  duration: string,
  kidFriendly: boolean,
  link: string,
  key: string,
};

declare module "*.sql" {
  const value: string;
  export default value;
}