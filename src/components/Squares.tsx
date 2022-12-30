import React from 'react';
import { View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { SquareType } from '../models/Square';
import { deleteColor } from '../store/colorSlice';
import { Square } from './Square';
import { styles } from './Styles';
import { SuperButton } from './SuperButton';

export const Squares = () => {
  const squares = useAppSelector((state) => state.colorSlice.squares);
  const dispatch = useAppDispatch();

  const onPressDeleteSquareHandler = (square: SquareType) => {
    dispatch(deleteColor(square));
  };

  const squaresView = squares.map((item) => {
    return (
      <SuperButton key={item.id} pressHandler={() => onPressDeleteSquareHandler(item)}>
        <Square rgbColor={item.rgbColor} />
      </SuperButton>
    );
  });

  return <View style={styles.squares}>{squaresView}</View>;
};
