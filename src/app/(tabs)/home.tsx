import CategoriesModal from "@/components/CategoriesModal";
import { signout } from "@/services/account";
import { getCategories } from "@/services/categories";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomePage() {
  const router = useRouter();

  const [categories, setCategories] = useState();

  useEffect(() => {
    getCategories().then((res) => {
      console.log(res);
    });
  });

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
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

