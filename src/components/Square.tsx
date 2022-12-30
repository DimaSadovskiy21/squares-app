import { View } from 'react-native';
import { useAppDispatch } from '../hooks/redux';
import { SquareType } from '../models/Square';
import { deleteColor } from '../store/colorSlice';
import { styles } from './Styles';
import { SuperButton } from './SuperButton';

type SquarePropsType = {
  square: SquareType;
};

export const Square: React.FC<SquarePropsType> = ({ square }) => {
  const dispatch = useAppDispatch();

  const onPressDeleteSquareHandler = (square: SquareType) => {
    dispatch(deleteColor(square));
  };
  return (
    <SuperButton  pressHandler={() => onPressDeleteSquareHandler(square)}>
      <View style={[styles.square, { backgroundColor: square.rgbColor }]} />
    </SuperButton>
  );
};
