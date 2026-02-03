import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const setting = () => {
  return (
    <View
    style={styles.container} 
    >
      <Text
      style={styles.text}
      >setting</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,                // take full screen
    justifyContent: 'center', // vertical center
    alignItems: 'center',     // horizontal center
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
export default setting