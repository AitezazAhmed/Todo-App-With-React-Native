import { FlatList, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useTodos } from "@/context/TodoContext";
import TodoItem from "./TodoItem";
import useTheme from "@/hooks/useTheme";
import { createHomeStyles } from "@/assets/styles/home.styles";

const TodoList = () => {
  const { todos } = useTodos();
  const { colors } = useTheme();
  const styles = createHomeStyles(colors);

  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => <TodoItem item={item} />}
      style={styles.todoList}
      contentContainerStyle={[
        styles.todoListContent,
        todos.length === 0 && styles.emptyListContainer
      ]}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <LinearGradient
            colors={colors.gradients.surface}
            style={styles.emptyIconContainer}
          >
            <Ionicons name="rocket-outline" size={48} color={colors.primary} />
          </LinearGradient>
          <Text style={styles.emptyText}>No Todos Yet! 🚀</Text>
          <Text style={styles.emptySubtext}>
            Add your first task to get started
          </Text>
        </View>
      }
      showsVerticalScrollIndicator={false}
    />
  );
};

export default TodoList;