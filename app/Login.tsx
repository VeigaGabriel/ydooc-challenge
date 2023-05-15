import { View, TextInput, Text } from 'react-native';
import React, { useState } from 'react';
import { Stack, useRouter } from 'expo-router';

import { useFonts } from 'expo-font';
import styles from './Styles';
import { Button } from 'tamagui';

import  { getUser } from '../src/services/fetchDummyAPI';
import { usePeopleInfo } from '../src/services/usePeopleInfo';


export default function Login() {
  const [ usernameInput, setUsernameInput ] = useState('');
  const [ passInput, setPassInput ] = useState('');

  const router = useRouter();

  const handleRedirect = ( directory: string ) => {
    router.push(directory)
  };

  const changePeopleInfo = usePeopleInfo( state => state.addPeopleInfo );
  const loginUserVerify = async () => {
    const retornoAPI = await getUser({ username: 'kminchelle', password: '0lelplR' });
    // delete retornoAPI.nomeDaChave;
    changePeopleInfo( retornoAPI );
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
          onChangeText={ (target) => {
            setUsernameInput(target)
          } }
          value={ usernameInput }
          placeholderTextColor="white"
          placeholder='Usuário'
          accessibilityLabel='Digite o seu email'
        />
        <Stack.Screen options={ { title: 'Home' } } />
        <TextInput
          style={styles.textInput}
          onChangeText={ (target) => setPassInput(target) }
          value={ passInput }
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
        onPress={ () => {
          loginUserVerify();
          handleRedirect('/products');
        } }
        size="$6"
        marginTop={'20%'}
      >
        Login
      </Button>
    </View>
  );
};
