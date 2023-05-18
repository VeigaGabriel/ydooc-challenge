import { View, TextInput, Text, Alert } from 'react-native';
import React, { useEffect } from 'react';
import { Stack, useRouter } from 'expo-router';

import { useFonts } from 'expo-font';
import styles from './Styles';
import { Button } from 'tamagui';

import  { getUser } from '../src/services/fetchDummyAPI';
import { usePeopleInfo } from '../src/services/usePeopleInfo';
import { useHandleChange } from '../src/services/useHandleChange';
import { loadStorage, saveStorage } from '../src/services/storageFuncs';

export default function Login() {
  const [ handleInput, username, password ] = useHandleChange(state => [
    state.handleInput, state.username, state.password
  ]);
  
  useEffect(() => {
    (async () => {
      const usernameStorage = await loadStorage('username');
      const passwordStorage = await loadStorage('password');
      
      if (usernameStorage && passwordStorage) {
        handleInput(usernameStorage, 'username');
        handleInput(passwordStorage, 'password');   
        loginUserVerify(usernameStorage, passwordStorage);
      }
    })();
  }, [])

  const router = useRouter();

  const handleRedirect = ( directory: string ) => {
    router.push(directory);
  };

  const changePeopleInfo = usePeopleInfo( state => state.addPeopleInfo );
  const loginUserVerify = async (user: string, pass: string) => {
    try {
      // console.log('@@@@', user, pass); ----------
      // console.log('####',username, password) ----------
      const retornoAPI = await getUser({ username: user, password: pass });
      // const retornoAPI = await getUser({ username: 'kminchelle', password:'0lelplR' });
      saveStorage('username', username);
      saveStorage('password', password);
      changePeopleInfo(retornoAPI);
      handleRedirect('/products');
      // delete retornoAPI.nomeDaChave;
    } catch (e: unknown) {
      if( (e as Error).message == 'Request failed with status code 400') {
        return Alert.alert('Usuário ou Senha incorretos');
      }
      Alert.alert('ERRO DESCONHECIDO:', (e as Error).message );
    }
  }

  const [fontsLoaded] = useFonts({
    'LilitaOne-Regular': require('../assets/fonts/LilitaOne-Regular.ttf'),
  });
  if (!fontsLoaded) return null;
  
  return (
    <View
    style={ styles.loginBody }>
      <Text style={ styles.logo }> Y D O O C </Text>
        <TextInput
          accessibilityLabel='Digite o seu nome de login'
          placeholder='Usuário'
          placeholderTextColor="white"
          style={ styles.textInput }
          value={ username }
          onChangeText={ (value) => {
            handleInput(value, 'username')
          }}
        />
        <Stack.Screen options={ { title: 'Home' } } />
        <TextInput
          style={styles.textInput}
          onChangeText={ (value) => {
            handleInput(value, 'password');
          }}
          value={ password }
          placeholderTextColor="white"
          placeholder='Senha'
          secureTextEntry
          accessibilityLabel='Digite a sua senha'
        />
      <Button
        accessibilityLabel='Botão para fazer o login'
        backgroundColor={'black'}
        borderColor='$pink10Dark'
        borderRadius={8}
        color={'white'}
        size="$6"
        marginTop={'20%'}
        onPress={ () => loginUserVerify(username, password) }
      >
        Login
      </Button>
    </View>
  );
};
