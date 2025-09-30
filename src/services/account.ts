import { supabase } from "@/lib/supabase";

export async function signup(email: string, password: string) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
}

export async function loginWithEmail(email: string, password: string) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
}

export async function signout() {
  let { error } = await supabase.auth.signOut();
}

