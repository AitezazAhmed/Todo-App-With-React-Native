import { StatusBar, View } from "react-native";
import useTheme from "../../hooks/useTheme";
import TodoInput from "@/components/TodoInput";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { createHomeStyles } from "@/assets/styles/home.styles";
import Header from "@/components/Header";
import TodoList from "@/components/TodoList";

export default function Index() {
  const { colors } = useTheme();
  const homeStyles = createHomeStyles(colors);

  return (
    <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>
      <SafeAreaView style={homeStyles.safeArea}>
        <StatusBar barStyle={colors.statusBarStyle} />
        
        {/* Header at the top - fixed */}
        <Header />
        
        {/* Input section - fixed */}
        <TodoInput />
        
        {/* FlatList takes remaining space and handles scrolling */}
        <TodoList />
      </SafeAreaView>
    </LinearGradient>
  );
}