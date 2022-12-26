import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setRandomColor } from '../store/colorSlice';
import { styles } from './Styles';

const AddSquaresRandom = () => {
    const dispatch = useDispatch();
  return (
    <>
      <TouchableOpacity onPress={() => dispatch(setRandomColor())} style={styles.button}>
        <Text style={{ fontSize: 20 }}>Generate Random Color</Text>
      </TouchableOpacity>
    </>
  );
};

export default AddSquaresRandom;

