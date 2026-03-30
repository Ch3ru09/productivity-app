// import { getUser } from "@/services/account";
import { Tabs, useRouter } from "expo-router";
import { useEffect } from "react";

export default function TabsLayout() {
  const router = useRouter();

  // useEffect(() => {
  //   getUser().then((user) => {
  //     if (user == null) {
  //       router.navigate("/");
  //     }
  //   });
  // });

  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="calendar" options={{ title: "calendar" }} />
    </Tabs>
  );
}
