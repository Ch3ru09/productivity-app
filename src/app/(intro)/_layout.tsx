import { getUser } from "@/services/account";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  const router = useRouter();

  useEffect(() => {
    getUser().then((user) => {
      if (user) {
        router.navigate("/home");
      }
    });
  });

  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "#0000",
        },
      }}
    >
      {/* <Stack.Screen
        name="index"
        options={{ title: "", headerStyle: { backgroundColor: "#0000" } }}
      /> */}
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
    </Stack>
  );
}

