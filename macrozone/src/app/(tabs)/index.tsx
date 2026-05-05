import CopyButton from "@/components/CopyButton";
import HomeHeader from "@/components/HomeHeader";
import MacroGrid from "@/components/MacroGrid";
import RecentMeals from "@/components/RecentMeals";
import ShareButton from "@/components/ShareButton";
import { getMeals, Meal } from "@/storage/meals";
import { globalStyles } from "@/styles/global";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  const [meals, setMeals] = useState<Meal[]>([]);

  const loadMeals = async () => {
    const data = await getMeals();
    setMeals(data);
    console.log("Meals loaded");
  };

  useFocusEffect(
    useCallback(() => {
      loadMeals();
    }, []),
  );

  return (
    <ScrollView
      style={globalStyles.container}
      contentContainerStyle={globalStyles.scrollContent}
    >
      <View style={globalStyles.header}>
        <Text style={globalStyles.title}>MacroZone</Text>
        <ShareButton meals={meals} />
      </View>
      <HomeHeader />
      <MacroGrid meals={meals} />
      <CopyButton meals={meals} />
      {/* <RemainderToggle /> Is not working on Expo Go */}
      <RecentMeals meals={meals} onDelete={loadMeals} />
    </ScrollView>
  );
}
