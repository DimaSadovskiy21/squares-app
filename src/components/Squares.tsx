import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { deleteColor } from '../store/colorSlice';
import { styles } from './Styles';

const Squares = () => {
  const color = useAppSelector((state) => state.colorSlice.value);
  const dispatch = useAppDispatch();
  return (
    <View style={styles.squares}>
      {color.map((item, index) => {
        return (
          <TouchableOpacity key={index} onPress={() => dispatch(deleteColor(item))}>
            <View
              style={{
                backgroundColor: item.rgbColor,
                height: 150,
                width: 150,
                alignSelf: 'center',
                margin: 10,
                borderRadius: 10,
              }}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Squares;
