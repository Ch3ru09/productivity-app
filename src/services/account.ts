import { supabase } from "@/lib/supabase";

export async function signup(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  console.log(data);
}

export async function loginWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  console.log("data: ", data, "error: ", error);
}

export async function signout() {
  const { error } = await supabase.auth.signOut();
}

export async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

