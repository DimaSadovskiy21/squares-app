import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setColor } from '../store/colorSlice';
import { styles } from './Styles';

const AddSquares = () => {
  const dispatch = useDispatch();
  const [red, setRed] = useState('');
  const [green, setGreen] = useState('');
  const [blue, setBlue] = useState('');
  return (
    <>
      <Text style={styles.title}>Red shade</Text>
      <TextInput
        placeholder={'Enter a number from 0 to 256...'}
        style={styles.input}
        value={red}
        onChangeText={setRed}
      />
      <Text style={styles.title}>Green shade</Text>
      <TextInput
        style={styles.input}
        placeholder={'Enter a number from 0 to 256...'}
        value={green}
        onChangeText={setGreen}
      />
      <Text style={styles.title}>Blue shade</Text>
      <TextInput
        placeholder={'Enter a number from 0 to 256...'}
        style={styles.input}
        value={blue}
        onChangeText={setBlue}
      />
      <TouchableOpacity
        onPress={() => dispatch(setColor({ red: +red, green: +green, blue: +blue }))}
        style={styles.button}>
        <Text style={{ fontSize: 20 }}>Generate Color</Text>
      </TouchableOpacity>
    </>
  );
};

export default AddSquares;
