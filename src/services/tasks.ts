import { supabase } from "@/lib/supabase";

export async function fetchTasks() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: tasks, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("author", user?.id);

  if (error) {
    throw new Error("Error from supabase");
  }

  return tasks;
}

export async function addTask(
  title: string,
  category: number,
  color?: string,
  description?: string,
  deadline?: Date,
  repeating?: number,
  experience?: number
) {
  const {
    data: { user },
    error: err,
  } = await supabase.auth.getUser();

  if (err) {
    throw err;
  }

  const { data, error } = await supabase.from("tasks").insert([
    {
      title,
      category,
      color,
      description,
      deadline,
      repeating,
      author: user?.id,
    },
  ]);

  if (error) {
    throw error;
  }

  return data;
}

export function calculateExperience(deadline: Date): number {
  const diff = diffDays(deadline);

  return 10 / diff;
}

function diffDays(deadline: Date): number {
  const today: Date = new Date();

  const diff = deadline.getTime() - today.getTime();
  return diff / (1000 * 60 * 60 * 24);
}

