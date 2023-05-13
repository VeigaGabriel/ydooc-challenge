import { View, Text, TextInput, Alert, Button } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

export default function Login() {
  const [ emailInput, setEmailInput ] = useState('')
  const [ passInput, setPassInput ] = useState('')
  const [ validEmail, setValidEmail ] = useState(false)

  const [apiOutput, setApiOutput ] = useState({})

  validateEmail = (email) => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }
  };

  const getUser = () => {
    axios.post('https://dummyjson.com/auth/login', {
    username: 'kminchelle',
    password: '0lelplR',
    // expiresInMins: 60, // opcional
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      // Manipular a resposta do servidor
      console.log(response.data);
      setApiOutput(response.data)
    })
    .catch(error => {
      // Lidar com erros
      console.error(error);
    });
  }

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
        onPress={ () => {
          Alert.alert('Logando')
          console.log('OOOOOOOOOIII');
          getUser()
        }}
        title='Login'
        // color="#841584"
        accessibilityLabel='Botão para fazer o login'
        // disabled={ (!validEmail) }
/>
        {
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