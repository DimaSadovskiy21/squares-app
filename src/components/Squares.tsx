import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useAppSelector } from '../hooks/redux';
import { Square } from './Square';
import { styles } from './Styles';

export const Squares = () => {
  const squares = useAppSelector((state) => state.colorSlice.squares);

  const squaresView = (
    <FlatList
      data={squares}
      renderItem={({ item }) => <Square key={item.id} square={item} />}
      keyExtractor={(item) => item.id}
      horizontal={true}
    />
  );

  return (
    <View style={styles.squares}>
      {squares.length ? (
        squaresView
      ) : (
        <Text style={styles.squaresTitle}>
          Hi! Add a little color to your life! Add your own color...
        </Text>
      )}
    </View>
  );
};
