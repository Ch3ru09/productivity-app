export type Category = {
  id: number;
  experience: number;
  level: number;
  leveltotal: number;
  story?: string;
  author: string;
  created_at: string;
  title: string;
  description?: string;
};

export type Task = {
  id: number;
  title: string;
  description?: string;
  color?: string;
  deadline?: Date;
  experience?: number;
  repeating?: number;
  category: number;
};

