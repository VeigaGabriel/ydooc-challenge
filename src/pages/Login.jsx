import { View, Text, TextInput, Alert, Button } from 'react-native'
import React, { useState } from 'react'

import  { getUser, fetchAPI } from '../../services/fetchAPI'
import { Link } from 'expo-router'

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
    <Link href="/products" asChild>
      <Button
          onPress={ () => getUser(setApiOutput)}
          title='Login'
          // color="#841584"
          accessibilityLabel='Botão para fazer o login'
          // disabled={ (!validEmail) }
      />
    </Link>
    <Link href="MODELO-DE-COMO-USAR-O-LINK" asChild>
    <Button
        onPress={ async () => { // Teste da lista produtos
          const API = await fetchAPI('https://dummyjson.com/products')
          console.log(API);
        }}
        title='lista de produtos'
        accessibilityLabel='Botão para fazer o login'
    />
    </Link>

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