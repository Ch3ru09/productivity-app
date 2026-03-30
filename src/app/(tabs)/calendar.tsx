import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, View } from "react-native";

export default function CalendarPage() {
  const [markedDates, setMarkedDates] = useState<
    { [id: string]: CalendarSelection }
  >({});

  const [currentActivity, setCurrentActivity] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      const savedDates = await AsyncStorage.getItem("gymDays");
      if (savedDates) {
        setMarkedDates(JSON.parse(savedDates));
      }
    };
  });

  const toggleDay = async (date: string) => {
    let updatedDates = { ...markedDates };

    if (updatedDates[date]) {
      delete updatedDates[date];
    } else {
      updatedDates[date] = { activityTrackedId: currentActivity };
    }

    setMarkedDates(updatedDates);
    await AsyncStorage.setItem("gymDays", JSON.stringify(updatedDates));
  };

  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, backgroundColor: "#fff" },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});

type CalendarSelection = {
  activityTrackedId: number;
};
