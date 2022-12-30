import React from 'react';
import { Keyboard, Text } from 'react-native';
import { useAppDispatch } from '../hooks/redux';
import { setRandomColor } from '../store/colorSlice';
import { styles } from './Styles';
import { SuperButton } from './SuperButton';

const AddSquaresRandom = () => {
  const dispatch = useAppDispatch();

  const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
  };

  const onPressAddSquareRandom = () => {
    dispatch(setRandomColor(randomRgb()));
    Keyboard.dismiss();
  };

  return (
    <SuperButton style={styles.button} pressHandler={onPressAddSquareRandom}>
      <Text style={styles.buttonTitle}>Generate Random Color</Text>
    </SuperButton>
  );
};

export default AddSquaresRandom;
