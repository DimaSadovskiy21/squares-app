import { combineReducers, configureStore } from '@reduxjs/toolkit';
import colorSlice from './colorSlice';

const rootReducer = combineReducers({
  colorSlice
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
