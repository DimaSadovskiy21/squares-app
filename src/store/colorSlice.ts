import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';
import { SquareType } from '../models/Square';

type ColorType = {
  squares: SquareType[];
};

const initialState: ColorType = {
  squares: [],
};

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setRandomColor: (state, action: PayloadAction<string>) => {
      state.squares = [{ id: uuid.v1(), rgbColor: action.payload }, ...state.squares ];
    },
    deleteColor: (state, action: PayloadAction<SquareType>) => {
      state.squares = state.squares.filter((f) => f.id !== action.payload.id);
    },
    setColor: (state, action: PayloadAction<string>) => {
      state.squares = [{ id: uuid.v1(), rgbColor: action.payload }, ...state.squares ];
    },
  },
});

export const { setRandomColor, deleteColor, setColor } = colorSlice.actions;

export default colorSlice.reducer;
