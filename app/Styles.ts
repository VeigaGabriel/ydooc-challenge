import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,

  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  textInput: {
    color: 'white',
    borderStyle: 'solid',
    borderColor: 'purple',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    width: '65%',
    margin: 3
  },

  logo: { 
    fontFamily: 'LilitaOne-Regular',
    fontSize: 65,
    color: 'rgb(255 0 128)',
    marginBottom: 50,
  },
  
});

export default styles;