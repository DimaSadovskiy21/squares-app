import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { useAppDispatch } from '../hooks/redux';
import { SquareType } from '../models/Square';
import { setRandomColor } from '../store/colorSlice';
import { styles } from './Styles';

const AddSquaresRandom = () => {
    const dispatch = useAppDispatch();

    const randomRgb = () => {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
    
      return `rgb(${red}, ${green}, ${blue})`;
    };
  return (
    <>
      <TouchableOpacity onPress={() => dispatch(setRandomColor(randomRgb()))} style={styles.button}>
        <Text style={{ fontSize: 20 }}>Generate Random Color</Text>
      </TouchableOpacity>
    </>
  );
};

export default AddSquaresRandom;

