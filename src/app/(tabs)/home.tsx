import { signout } from "@/services/account";
import { calculateExperience } from "@/services/tasks";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Button, Text, View } from "react-native";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    calculateExperience(new Date("2025-10-10T12:30:00"));
  });

  return (
    <View>
      <Text>Welcome home</Text>
      <Button
        title="signout"
        onPress={() => {
          signout();
          router.navigate("/");
        }}
      />
    </View>
  );
}

