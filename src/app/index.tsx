import { signout } from "@/services/account";
import { Link } from "expo-router";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Link href={{ pathname: "login" }}>Login</Link>
      <Link href={{ pathname: "signup" }}>Signup</Link>
      <Button title="signout" onPress={signout} />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({})

