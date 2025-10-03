import { getUser } from "@/services/account";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

export default function TabsLayout() {
  const router = useRouter();

  useEffect(() => {
    getUser().then((user) => {
      if (user == null) {
        router.navigate("/");
      }
    });
  });

  return (
    <Stack>
      <Stack.Screen name="home" options={{ title: "Home" }} />
    </Stack>
  );
}

