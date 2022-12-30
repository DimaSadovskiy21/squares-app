import React from 'react'
import { TextInput, Text } from 'react-native';
import { styles } from './Styles';

type InputNumericPropsType = {
    title: string;
    value: string;
    setValue: (value:string) => void;

}

export const InputNumeric: React.FC<InputNumericPropsType> = ({title, value, setValue}) => {
  return (
    <>
    <Text style={styles.title}>{title}</Text>
      <TextInput
        maxLength={3}
        keyboardType="numeric"
        placeholder={'Enter a number from 0 to 256...'}
        style={styles.input}
        value={value}
        onChangeText={setValue} />
        </>
  )
}

