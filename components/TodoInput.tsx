import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import useTheme from "@/hooks/useTheme";
import { createHomeStyles } from "@/assets/styles/home.styles";
import { useTodos } from "@/context/TodoContext";

const TodoInput = () => {
  const { colors } = useTheme();
  const styles = createHomeStyles(colors);
  const [text, setText] = useState("");
  const { addTodo } = useTodos();

  const handleAdd = async () => {
    if (!text.trim()) return;
    await addTodo(text.trim());
    setText("");
  };

  return (
    <View style={styles.inputSection}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="What needs to be done?"
          value={text}
          onChangeText={setText}
          onSubmitEditing={handleAdd}
          placeholderTextColor={colors.textMuted}
        />

        <TouchableOpacity onPress={handleAdd}>
          <LinearGradient
            colors={colors.gradients.primary}
            style={styles.addButton}
          >
            <Ionicons name="add" size={24} color="#fff" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoInput;
