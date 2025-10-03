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

