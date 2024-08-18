import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Title from '../components/title'

const Home = () => {
  return (
    <View>
      <Title />
      <View style={styles.bannerContainer}>
        <Image source={require('../assets/pics/Exams-amico.png'     
        )}
        style={styles.banner}
        resizeMode="contain"
        />
      </View>
      <TouchableOpacity>
        <Text>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
    banner:{
        height:300,
        width: 300,
    },
    bannerContainer:{
        justifyContent: "center",
        alignItems: "center"
    }
});