import { fetchTasks } from "@/services/tasks";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  const getTasks = async () => {
    const res = await fetchTasks();
    console.log(res);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

// const styles = StyleSheet.create({})

