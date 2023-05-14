import { View, TextInput, Text } from 'react-native'
import React, { useState } from 'react'
import { Link, Redirect } from 'expo-router'
import styles from './Styles'
// import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'tamagui'
import  { getUser } from '../src/services/fetchDummyAPI'
import { useFonts } from 'expo-font';

import { IPeopleInfo } from '../src/services/fetchDummyAPI'

export default function Login() {
  const [ emailInput, setEmailInput ] = useState('')
  const [ passInput, setPassInput ] = useState('')
  const [ validEmail, setValidEmail ] = useState(false)
  const [apiOutput, setApiOutput ] = useState<IPeopleInfo>({} as IPeopleInfo)

  const [fontsLoaded] = useFonts({
    'LilitaOne-Regular': require('../assets/fonts/LilitaOne-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const validateEmail = ( email: string ) => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }
  };

  return (
    <View 
    style={{flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'black',
    }}>
      <Text style={{
        fontFamily: 'LilitaOne-Regular',
        fontSize: 65,
        color: 'rgb(255 0 128)',
        marginBottom: 50
        }}>Y D O O C</Text>

      {/* <H1 marginBottom={'20%'} color={'$pink10Dark'} fontFamily={'LilitaOne-Regular'}>Y D O O C</H1> */}
      {/* <View style={{width: '100%', backgroundColor: 'white', padding: 50}}> */}
        <TextInput
          style={styles.textInput}
          onChangeText={ (target) => {
            setEmailInput(target)
            // validateEmail(target)
          } }
          value={ emailInput }
          placeholderTextColor="white"
          placeholder='Email'
          keyboardType='email-address'
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
      {/* </View> */}
    {/* <Link href="/products" asChild> */}
      <Button
        accessibilityLabel='Botão para fazer o login'
        backgroundColor={'black'}
        color={'white'}
        borderColor='$pink10Dark'
        borderRadius={8}
        onPress={ async () => setApiOutput(await getUser({username: 'kminchelle', password: '0lelplR'})) }
        size="$6"
        marginTop={'20%'}
        // disabled={ (!validEmail) }
      >
        Login
      </Button>
    {/* </Link> */}
      {/* <LinearGradient
        // Button Linear Gradient
        colors={['black', 'rgb(255 0 128)']}
        style={{height: 100, position: 'absolute', bottom: 0}}
        >
        <Text style={{color: 'white', textAlign: 'center', fontSize: 80}}>
          Login
          </Text>
      </LinearGradient> */}
        { // Campo apenas para testar se o retorno da API funciona corretamente
          (apiOutput.email) && (
            <View>
              <TextInput>{apiOutput.id}</TextInput>
              <TextInput>{apiOutput.username}</TextInput>
              <TextInput>{apiOutput.email}</TextInput>
              <TextInput>{apiOutput.firstName}</TextInput>
              <TextInput>{apiOutput.lastName}</TextInput>
              <TextInput>{apiOutput.gender}</TextInput>
            </View>
          )
        }
    </View>
  )
}