import { StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation/myStack';

const App = () => {
  return (
    
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});