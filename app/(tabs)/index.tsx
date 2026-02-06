import { StatusBar, View, ScrollView } from "react-native";
import useTheme from "../../hooks/useTheme";
import TodoInput from "@/components/TodoInput";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { createHomeStyles } from "@/assets/styles/home.styles";
import Header from "@/components/Header";

export default function Index() {
  const { colors } = useTheme();
  const homeStyles = createHomeStyles(colors);

  return (
    <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>
      <SafeAreaView style={homeStyles.safeArea}>
        <StatusBar barStyle={colors.statusBarStyle} />

        {/* ScrollView helps if content grows */}
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Header/>
          <TodoInput />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
