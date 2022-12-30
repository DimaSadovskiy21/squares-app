import React from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';

type SuperButton = {
    pressHandler: () => void;
    style?: StyleProp<ViewStyle>;
    disabled?: boolean;
    children: React.ReactNode;
}

export const SuperButton:React.FC<SuperButton> = ({children, pressHandler, style, disabled}) => {

    const onPressHandler = () => {
        pressHandler()
    }

  return (
    <TouchableOpacity
        onPress={onPressHandler}
        style={style}
        disabled={disabled}>
        {children}
      </TouchableOpacity>
  )
}

