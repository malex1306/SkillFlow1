import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Title from '../components/title'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.bannerContainer}>
        <Image source={require('../assets/pics/Exams-amico.png'     
        )}
        style={styles.banner}
        resizeMode="contain"
        />
      </View>
      <TouchableOpacity onPress={() => {
         console.log('Navigating to Quiz');
         navigation.navigate("Quiz");
         }} style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
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
        alignItems: "center",
        flex: 1,
    },
    container:{
        paddingTop: 40,
        paddingHorizontal: 20 ,
        height: '100%'
    },
    button:{
        width: '100%',
        backgroundColor: "#6930C3",
        padding: 16,
        borderRadius: 16,
        alignItems: "center",
        marginBottom: 30,
        
    },
    buttonText:{
        fontSize: 24,
        fontWeight: "600",
        color: 'white',
    },
});