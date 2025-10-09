import { Stack } from "expo-router";

export default function RootLayout() {
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

