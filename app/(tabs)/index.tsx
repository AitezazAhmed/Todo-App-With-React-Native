import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useTheme from "../hooks/useTheme";

export default function Index() {
  const {toggleDarkMode,isDarkMode,colors}=useTheme()
  return (
<View style={[styles.container, { backgroundColor: colors.bg }]}>
      <TouchableOpacity
        onPress={toggleDarkMode}
        style={[styles.button, { backgroundColor: colors.primary }]}
      >
        <Text style={[styles.text, { color: colors.text }]}>
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
