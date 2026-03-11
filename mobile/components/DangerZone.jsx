import { createSettingsStyles } from "@/assets/styles/settings.styles";
import { useTodos } from "@/context/TodoContext"; // your context
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Alert, Text, TouchableOpacity, View } from "react-native";

const DangerZone = () => {
  const { colors } = useTheme();
  const settingsStyles = createSettingsStyles(colors);

  const { todos, deleteTodo } = useTodos(); // get your delete function from context

  const handleResetApp = () => {
    Alert.alert(
      "Reset App",
      "⚠️ This will delete ALL your todos permanently. This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete All",
          style: "destructive",
          onPress: async () => {
            try {
              // delete each todo
              await Promise.all(todos.map(todo => deleteTodo(todo._id)));
              Alert.alert("App Reset", "All todos have been deleted successfully.");
            } catch (error) {
              console.log("Error deleting todos:", error);
              Alert.alert("Error", "Failed to reset app.");
            }
          },
        },
      ]
    );
  };

  return (
    <LinearGradient colors={colors.gradients.surface} style={settingsStyles.section}>
      <Text style={settingsStyles.sectionTitleDanger}>Danger Zone</Text>

      <TouchableOpacity
        style={[settingsStyles.actionButton, { borderBottomWidth: 0 }]}
        onPress={handleResetApp}
        activeOpacity={0.7}
      >
        <View style={settingsStyles.actionLeft}>
          <LinearGradient colors={colors.gradients.danger} style={settingsStyles.actionIcon}>
            <Ionicons name="trash" size={18} color="#fff" />
          </LinearGradient>
          <Text style={settingsStyles.actionTextDanger}>Reset App</Text>
        </View>
        <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default DangerZone;
