import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View style ={styles.container}>
      <Text style={styles.title}>SkillFlow</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
    title:{
        fontSize: 36,
        fontWeight:'600',
        fontFamily:'header'
    },
    container:{
        paddingVertical: 16,
        justifyContent:"center",
        alignItems: "center"
    }
})