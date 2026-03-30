import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";

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
    loadData();
  });

  const toggleDay = async (date: string) => {
    let updatedDates = { ...markedDates };

    if (updatedDates[date]) {
      delete updatedDates[date];
    } else {
      updatedDates[date] = { selected: true, selectedColor: "#2ecc71" };
    }

    setMarkedDates(updatedDates);
    await AsyncStorage.setItem("gymDays", JSON.stringify(updatedDates));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Swimming Tracker</Text>
      <Calendar
        onDayPress={(day) => toggleDay(day.dateString)}
        markedDates={markedDates}
        theme={{
          todayTextColor: "#e74c3c",
          arrowColor: "#3498db",
        }}
      />
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
  selected: boolean;
  selectedColor: string;
};
