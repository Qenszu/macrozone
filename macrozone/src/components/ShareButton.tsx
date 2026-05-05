import { Meal } from "@/storage/meals";
import { colors } from "@/styles/global";
import { Ionicons } from "@expo/vector-icons";
import { Share, TouchableOpacity } from "react-native";

type ShareButtonProps = {
  meals: Meal[];
};

export default function ShareButton({ meals }: ShareButtonProps) {
  const handleShare = async () => {
    const totals = meals.reduce(
      (acc, meal) => ({
        calories: acc.calories + meal.calories,
        proteins: acc.proteins + meal.proteins,
        carbs: acc.carbs + meal.carbs,
        fat: acc.fat + meal.fat,
      }),
      { calories: 0, proteins: 0, carbs: 0, fat: 0 },
    );

    await Share.share({
      message: `Macrozone Daily Summary\n
            Calories: ${totals.calories}
            Proteins: ${totals.proteins}g
            Carbs: ${totals.carbs}g
            Fat: ${totals.fat}g
            \nMeals: ${meals.length} logged today `,
    });
  };

  return (
    <TouchableOpacity onPress={handleShare}>
      <Ionicons name="share-outline" size={24} color={colors.primary} />
    </TouchableOpacity>
  );
}
