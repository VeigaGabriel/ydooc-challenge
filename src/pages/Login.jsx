import { View, Text, TextInput, Alert, Button } from 'react-native'
import React, { useState } from 'react'

export default function Login() {
  const [ emailInput, setEmailInput ] = useState('')
  const [ passInput, setPassInput ] = useState('')
  const [ validEmail, setValidEmail ] = useState(false)

  validateEmail = (email) => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }
  };

  return (
    <View>
      <Text>NOME/LOGO DA EMPRESA</Text>
      <TextInput 
        // style={}
        onChangeText={ (target) => {
          setEmailInput(target)
          validateEmail(target)
          console.log(validEmail);
        } }
        value={ emailInput }
        placeholder='Email'
        keyboardType='email-address'
        accessibilityLabel='Digite o seu email'
      />

      <TextInput 
        // style={}
        onChangeText={ (target) => setPassInput(target) }
        value={ passInput }
        placeholder='Senha'
        secureTextEntry={ true }
        accessibilityLabel='Digite a sua senha'
      />
    <Button
        onPress={ () => Alert.alert('Logando') }
        title='Login'
        // color="#841584"
        accessibilityLabel='Botão para fazer o login'
        disabled={ (!validEmail) }
/>

    </View>
  )
}