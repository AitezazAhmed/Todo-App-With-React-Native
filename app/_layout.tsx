import { Stack } from "expo-router";
import { ThemeProvider } from "../hooks/useTheme";
import { TodoProvider } from "@/context/TodoContext";

export default function RootLayout() {
  return ( 
    <ThemeProvider>
      <TodoProvider>
  <Stack screenOptions={{
    headerShown:false
  }} >
      <Stack.Screen name="(tabs)"  />
    </Stack>
    </TodoProvider>
    </ThemeProvider>
    
    )
}
