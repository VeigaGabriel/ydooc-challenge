import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loginBody: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
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
    marginBottom: 50
  },
  
});

export default styles;