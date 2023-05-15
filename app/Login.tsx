import { View, TextInput, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link } from 'expo-router'

import { useFonts } from 'expo-font';
import styles from './Styles'
import { Button } from 'tamagui'

import  { getUser } from '../src/services/fetchDummyAPI'
// import { IPeopleInfo } from '../src/services/fetchDummyAPI'
import { usePeopleInfo } from '../src/services/usePeopleInfo'


export default function Login() {
  const [ usernameInput, setUsernameInput ] = useState('')
  const [ passInput, setPassInput ] = useState('')
  const [ validEmail, setValidEmail ] = useState(false)
  // const [apiOutput, setApiOutput ] = useState<IPeopleInfo>({} as IPeopleInfo)

    // --------- TESTANDO ZUSTAND ------------------ //
  const TESTANDO_FUNCAO_ZUSTAND = async () => {
    const changePeopleInfo = usePeopleInfo( state => state.addPeopleInfo );
    const retornoAPI = await getUser({ username: 'kminchelle', password: '0lelplR' })
    console.warn(retornoAPI);
    // delete retornoAPI.nomeDaChave;
    // changePeopleInfo( retornoAPI );
  }
  // TESTANDO_FUNCAO_ZUSTAND()

    // const peopleInfo = usePeopleInfo(state => state.user) // PARA RESGATAR AS INFORMAÇÕES DO ESTADO
  //----------------------------------------------//
  const [fontsLoaded] = useFonts({
    'LilitaOne-Regular': require('../assets/fonts/LilitaOne-Regular.ttf'),
  });
  if (!fontsLoaded) return null;

  return (
    <View 
    style={{
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    }}>
      <Text style={{
        fontFamily: 'LilitaOne-Regular',
        fontSize: 65,
        color: 'rgb(255 0 128)',
        marginBottom: 50
        }}>
          Y D O O C
        </Text>

        <TextInput
          style={styles.textInput}
          onChangeText={ (target) => {
            setUsernameInput(target)
          } }
          value={ usernameInput }
          placeholderTextColor="white"
          placeholder='Usuário'
          accessibilityLabel='Digite o seu email'
        />

        <TextInput 
          style={styles.textInput}
          onChangeText={ (target) => setPassInput(target) }
          value={ passInput }
          placeholderTextColor="white"
          placeholder='Senha'
          secureTextEntry={ true }
          accessibilityLabel='Digite a sua senha'
        />
    <Link href="/products" asChild>
      <Button
        accessibilityLabel='Botão para fazer o login'
        backgroundColor={'black'}
        color={'white'}
        borderColor='$pink10Dark'
        borderRadius={8}
        // onPress={ async () => setApiOutput(await getUser({username: 'kminchelle', password: '0lelplR'})) }
        size="$6"
        marginTop={'20%'}
      >
        Login
      </Button>
    </Link>
    </View>
  )
}