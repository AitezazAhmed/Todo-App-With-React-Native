import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={style.container}
    >
      <Text
      style={style.content}
      >Edit app/index.tsx to edit this screen.</Text>
      <Text
      style={style.text}
      >hi i am Aitezaz</Text>
    </View>
  );
}
const style=StyleSheet.create({
  container:{
    flex:1,
    gap:10,
    justifyContent:"center",
    alignItems:"center"
  },
  content:{
    fontSize:20
  },
  text:{
fontSize:10
  }
})
