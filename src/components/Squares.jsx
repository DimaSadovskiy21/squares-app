import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteColor } from '../store/colorSlice';
import { styles } from './Styles';

const Squares = () => {
  const color = useSelector((state) => state.color.value);
  const dispatch = useDispatch();
  return (
    <View style={styles.squares}>
      {color.map((item) => {
        return (
          <TouchableOpacity key={item.id} onPress={() => dispatch(deleteColor(item))}>
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
