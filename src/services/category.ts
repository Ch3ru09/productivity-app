import { supabase } from "@/lib/supabase";

export async function addCategory(
  name: string,
  description: string,
  story: string
) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase.from("category").insert([
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

