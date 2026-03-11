import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native"; // Add Alert here
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useTodos } from "@/context/TodoContext";
import useTheme from "@/hooks/useTheme";
import { createHomeStyles } from "@/assets/styles/home.styles";

const TodoItem = ({ item }) => {
  const { deleteTodo, updateTodo, toggleTodo } = useTodos();
  const { colors } = useTheme();
  const styles = createHomeStyles(colors);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.title);

  const handleToggle = async () => {
    try {
        console.log(item._id)
      await toggleTodo(item._id);
    } catch (error) {
      Alert.alert("Error", "Failed to toggle todo");
    }
  };

  const handleUpdate = async () => {
    if (!editText.trim()) {
      Alert.alert("Error", "Todo cannot be empty");
      return;
    }
    try {
      await updateTodo(item._id, editText);
      setIsEditing(false);
    } catch (error) {
      Alert.alert("Error", "Failed to update todo");
    }
  };

  const handleDelete = () => {
    Alert.alert(
      "Delete Todo", 
      "Are you sure you want to delete this todo?",
      [
        { text: "Cancel", style: "cancel" },
        { 
          text: "Delete", 
          style: "destructive", 
          onPress: async () => {
            try {
              await deleteTodo(item._id);
            } catch (error) {
              Alert.alert("Error", "Failed to delete todo");
            }
          } 
        },
      ]
    );
  };

  return (
    <View style={styles.todoItemWrapper}>
      <LinearGradient
        colors={colors.gradients.surface}
        style={styles.todoItem}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {/* Checkbox */}
        <TouchableOpacity
          style={styles.checkbox}
          activeOpacity={0.7}
          onPress={handleToggle}
        >
          <LinearGradient
            colors={item.isCompleted ? colors.gradients.success : colors.gradients.muted}
            style={[
              styles.checkboxInner,
              { borderColor: item.isCompleted ? "transparent" : colors.border },
            ]}
          >
            {item.isCompleted && (
              <Ionicons name="checkmark" size={20} color="#fff" />
            )}
          </LinearGradient>
        </TouchableOpacity>

        {/* Content */}
        {isEditing ? (
          <View style={styles.editContainer}>
            <TextInput
              style={styles.editInput}
              value={editText}
              onChangeText={setEditText}
              autoFocus
              multiline
              placeholder="Edit your todo..."
              placeholderTextColor={colors.textMuted}
            />
            <View style={styles.editButtons}>
              <TouchableOpacity onPress={handleUpdate} activeOpacity={0.8}>
                <LinearGradient
                  colors={colors.gradients.success}
                  style={styles.editButton}
                >
                  <Ionicons name="checkmark" size={16} color="#fff" />
                  <Text style={styles.editButtonText}>Save</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => setIsEditing(false)} 
                activeOpacity={0.8}
              >
                <LinearGradient
                  colors={colors.gradients.muted}
                  style={styles.editButton}
                >
                  <Ionicons name="close" size={16} color="#fff" />
                  <Text style={styles.editButtonText}>Cancel</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.todoTextContainer}>
            <Text
              style={[
                styles.todoText,
                item.isCompleted && {
                  textDecorationLine: "line-through",
                  color: colors.textMuted,
                  opacity: 0.6,
                },
              ]}
            >
              {item.title}
            </Text>

            <View style={styles.todoActions}>
              <TouchableOpacity
                onPress={() => setIsEditing(true)}
                activeOpacity={0.8}
              >
                <LinearGradient
                  colors={colors.gradients.warning}
                  style={styles.actionButton}
                >
                  <Ionicons name="pencil" size={18} color="#fff" />
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleDelete}
                activeOpacity={0.8}
              >
                <LinearGradient
                  colors={colors.gradients.danger}
                  style={styles.actionButton}
                >
                  <Ionicons name="trash" size={18} color="#fff" />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </LinearGradient>
    </View>
  );
};

export default TodoItem;