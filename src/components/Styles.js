import { autoBatchEnhancer } from '@reduxjs/toolkit';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#dcdcdc',
    padding: 5,
    borderRadius: 10,
  },
  title: {
    marginLeft: 5,
    fontSize: 18,
  },
  squares: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    margin: 25,
  },
});
