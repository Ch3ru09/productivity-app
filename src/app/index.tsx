import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LandingPage() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Get started"
        onPress={() => {
          router.push("/signup");
        }}
      ></Button>
      <TouchableOpacity onPress={() => router.navigate("/login")}>
        <Text>Already have an account?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
});

