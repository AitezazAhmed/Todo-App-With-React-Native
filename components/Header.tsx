import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import useTheme from "@/hooks/useTheme";
import { createHomeStyles } from "@/assets/styles/home.styles";
import { useTodos } from "@/context/TodoContext";

const Header = () => {
  const { colors } = useTheme();
  const styles = createHomeStyles(colors);
  const { todos } = useTodos();

  const completed = todos.filter(t => t.isCompleted).length;
  const total = todos.length;
  const progress = total ? (completed / total) * 100 : 0;

  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <LinearGradient
          colors={colors.gradients.primary}
          style={styles.iconContainer}
        >
          <Ionicons name="flash-outline" size={28} color="#fff" />
        </LinearGradient>

        <View style={styles.titleTextContainer}>
          <Text style={styles.title}>Today's Tasks 👀</Text>
          <Text style={styles.subtitle}>
            {completed} of {total} completed
          </Text>
        </View>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar}>
            <LinearGradient
              colors={colors.gradients.success}
              style={[styles.progressFill, { width: `${progress}%` }]}
            />
          </View>
          <Text style={styles.progressText}>
            {Math.round(progress)}%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
