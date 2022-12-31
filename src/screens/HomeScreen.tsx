import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { AddSquaresRandom } from '../components/AddSquaresRandom';
import { AddSquares } from '../components/AddSquares';
import { Squares } from '../components/Squares';
import { styles } from '../components/Styles';

export const HomeScreen = () => {
  return (
    <View  style={styles.wrapper}>
      <StatusBar style="dark" />
      <AddSquares />
      <AddSquaresRandom />
      <Squares />
    </View>
  );
};
