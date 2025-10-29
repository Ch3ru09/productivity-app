import { User } from "@supabase/supabase-js";
import { ActionDispatch, createContext, useReducer } from "react";

export const UserContext = createContext<User | {}>({});
export const UserDispatchContext = createContext<ActionDispatch<
  [action: UserReducerActionProps]
> | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, dispatch] = useReducer(userReducer, {});

  return (
    <UserContext value={user}>
      <UserDispatchContext value={dispatch}>{children}</UserDispatchContext>
    </UserContext>
  );
}

function userReducer(
  user: User | {},
  action: UserReducerActionProps
): {} | User {
  switch (action.type) {
  }

  return {};
}

type UserReducerActionProps = {
  type: "set" | "delete";
};

