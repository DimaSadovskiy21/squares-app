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
  disabledButton: {
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    opacity: 0.2,
  },
  buttonTitle: {
    fontSize: 20,
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
  squaresTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },
  squares: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 25,
  },
  squareBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  square: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    margin: 10,
    borderRadius: 10,
  },
  squareTitle: {
    fontSize: 18
  },
});
