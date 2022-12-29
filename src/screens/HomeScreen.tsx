import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import AddSquaresRandom from '../components/AddSquaresRandom';
import AddSquares from '../components/AddSquares';
import Squares from '../components/Squares';
import { styles } from '../components/Styles';

const HomeScreen = () => {
  return (
    <ScrollView keyboardShouldPersistTaps='handled' style={styles.wrapper}>
      <StatusBar style="dark" />
      <AddSquares />
      <AddSquaresRandom />
      <Squares />
    </ScrollView>
  );
};

export default HomeScreen;
