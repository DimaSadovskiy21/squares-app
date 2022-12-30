import React from 'react';
import { View } from 'react-native';
import { useAppSelector } from '../hooks/redux';
import { Square } from './Square';
import { styles } from './Styles';

export const Squares = () => {
  const squares = useAppSelector((state) => state.colorSlice.squares);

  const squaresView = squares.map((item) => <Square key={item.id} square={item} />);

  return <View style={styles.squares}>{squaresView}</View>;
};
