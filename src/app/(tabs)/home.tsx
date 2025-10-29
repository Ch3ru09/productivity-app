import CategoriesModal from "@/components/CategoriesModal";
import { Category, Task } from "@/lib/schema";
import { signout } from "@/services/account";
import { getCategories } from "@/services/categories";
import { getTasks } from "@/services/tasks";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, FlatList, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomePage() {
  const router = useRouter();

  const [categories, setCategories] = useState<Category[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
    getTasks();
  }, [categories]);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
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
        <CategoriesModal />
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <CategoryContainer
              title={item.title}
              level={item.level}
              tasks={tasks.filter((x) => x.category == item.id)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

function CategoryContainer({ title, level, tasks }: CategoryContainerProps) {
  return (
    <View>
      <View>
        <Text>{title}</Text>
        <Text>{level}</Text>
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem title={item.title} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

function TaskItem({ title }: TaskItemProps) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

type TaskItemProps = {
  title: string;
};

type CategoryContainerProps = {
  title: string;
  level: number;
  tasks: Task[];
};

