import useDynamicTheme from "./hooks/useDynamicTheme";

export type Theme = ReturnType<typeof useDynamicTheme>;

export type Skill = {
  id: number,
  pts: number,
  name: string,
};

export type Preferences = {
  showStart: boolean,
  accent: string,
  theme: string,
  thumbnail: string,
  profilePicture: string,
  username: string,
};

export type Frequency = 'one-time' | 'daily' | 'weekly' | 'monthly' | 'yearly';

export type Priority = 'low' | 'average' | 'high';

export type Task = {
  id: number,
  name: string,
  priority: number,
  frequency: number,
  creationDate: Date,
};

export type Note = {
  id: number,
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