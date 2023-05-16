import { View, TextInput, Text, Alert } from 'react-native';
import React from 'react';
import { Stack, useRouter } from 'expo-router';

import { useFonts } from 'expo-font';
import styles from './Styles';
import { Button } from 'tamagui';

import  { getUser } from '../src/services/fetchDummyAPI';
import { usePeopleInfo } from '../src/services/usePeopleInfo';
import { useHandleChange } from '../src/services/useHandleChange';

export default function Login() {
  const [ handleInput, username, password ] = useHandleChange(state => [
    state.handleInput, state.username, state.password
  ]);

  const router = useRouter();

  const handleRedirect = ( directory: string ) => {
    router.push(directory);
  };

  const changePeopleInfo = usePeopleInfo( state => state.addPeopleInfo );
  const loginUserVerify = async () => {
    try {
      const retornoAPI = await getUser({ username, password });
      changePeopleInfo( retornoAPI );
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
          style={ styles.textInput }
          onChangeText={ (value) => {
            handleInput(value, 'username')
          }}
          value={ username }
          // value='kminchelle'
          placeholderTextColor="white"
          placeholder='Usuário'
          accessibilityLabel='Digite o seu nome de login'
        />
        <Stack.Screen options={ { title: 'Home' } } />
        <TextInput
          style={styles.textInput}
          onChangeText={ (value) => {
            handleInput(value, 'password');
          }}
          value={ password }
          // value='0lelplR'
          placeholderTextColor="white"
          placeholder='Senha'
          secureTextEntry
          accessibilityLabel='Digite a sua senha'
        />
      <Button
        accessibilityLabel='Botão para fazer o login'
        backgroundColor={'black'}
        color={'white'}
        borderColor='$pink10Dark'
        borderRadius={8}
        onPress={ loginUserVerify }
        size="$6"
        marginTop={'20%'}
      >
        Login
      </Button>
    </View>
  );
};
