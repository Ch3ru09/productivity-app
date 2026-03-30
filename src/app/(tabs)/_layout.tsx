// import { getUser } from "@/services/account";
import { Tabs, useRouter } from "expo-router";
import { useEffect } from "react";
import { Image } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

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
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "calendar",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
