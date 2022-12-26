import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';

const initialState = {
  value: [],
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return {id: uuid.v1(), rgbColor: `rgb(${red}, ${green}, ${blue})`};
};

const colorRgb = ({red, green, blue}) => {
  return {id: uuid.v1(), rgbColor: `rgb(${red}, ${green}, ${blue})`};
}

export const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setRandomColor: (state) => {
      state.value = [randomRgb(), ...state.value ];
    },
    deleteColor: (state, action) => {
      state.value = state.value.filter(f => f.id !== action.payload.id);
    },
    setColor: (state, action) => {
      state.value = [colorRgb(action.payload), ...state.value];
    },
  },
});

export const { setRandomColor, deleteColor, setColor } = colorSlice.actions;

export default colorSlice.reducer;
