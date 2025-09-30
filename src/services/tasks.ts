import { supabase } from "@/lib/supabase";

export async function fetchTasks() {
  const { data: tasks, error } = await supabase.from("tasks").select("*");

  console.log(error);

  if (error) {
    throw new Error("Error from supabase");
  }

  return tasks;
}

