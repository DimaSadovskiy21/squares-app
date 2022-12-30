import React, { useState } from 'react';
import { Keyboard, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { setColor } from '../store/colorSlice';
import { styles } from './Styles';
import { InputNumeric } from './InputNumeric';
import { SuperButton } from './SuperButton';

export const AddSquares = () => {
  const dispatch = useDispatch();
  const [red, setRed] = useState('');
  const [green, setGreen] = useState('');
  const [blue, setBlue] = useState('');

  const colorRgb = () => {
    return `rgb(${red}, ${green}, ${blue})`;
  };

  const onPressAddSquareHandler = () => {
    dispatch(setColor(colorRgb()));
    setRed('');
    setGreen('');
    setBlue('');
    Keyboard.dismiss();
  };

  const styleButton =
    +red > 256 || +green > 256 || +blue > 256 || !red.length || !green.length || !blue.length
      ? styles.disabledButton
      : styles.button;

  const disabledButton =
    +red > 256 || +green > 256 || +blue > 256 || !red.length || !green.length || !blue.length;
    
  return (
    <>
      <InputNumeric title="Red shade" value={red} setValue={setRed} />
      <InputNumeric title="Green shade" value={green} setValue={setGreen} />
      <InputNumeric title="Blue shade" value={blue} setValue={setBlue} />
      <SuperButton
        pressHandler={onPressAddSquareHandler}
        style={styleButton}
        disabled={disabledButton}>
        <Text style={styles.buttonTitle}>Generate Color</Text>
      </SuperButton>
    </>
  );
};

