import { supabase } from "@/lib/supabase";

export async function getCategories() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("author", user?.id);

  if (error) {
    throw error;
  }

  return data;
}

export async function addCategory(
  name: string,
  description: string,
  story: string
) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase.from("categories").insert([
    {
      name: name,
      description: description,
      story: story,
      author: user?.id,
    },
  ]);

  if (error) {
    throw error;
  }

  return data;
}

