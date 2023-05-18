import {  View } from 'react-native'
import React from 'react'

import { IPeopleInfo } from '../interfaces/IPeopleInfo';
import { Button, Input, Text, YStack } from 'tamagui';
import { useRouter } from 'expo-router';
import { removeStorage } from '../services/storageFuncs';
import { useHandleChange } from '../services/useHandleChange';
import { useListProducts } from '../services/useListProducts';

export default function UserHeader({
id,
username,
email,
firstName,
lastName,
gender,
}: IPeopleInfo) {
  const [ handleInput, search ] = useHandleChange(state => [ state.handleInput, state.search ])
const [ fetchProductsWithSearch ] = useListProducts((state) => [ state.fetchProductsWithSearch ])
  const router = useRouter();
  return (
      <YStack display='flex' flexDirection='row' justifyContent='space-between' padding={'$3'} alignItems='center'>
        <Text 
          accessibilityLabel='Nome do usuário'
          color={'white'}
          fontFamily={'$heading'}
          fontSize={'$3'}
          >
            { `${firstName} ${lastName}` }
        </Text>
        <Input
          accessibilityLabel='Campo de Pesquisa'
          padding={'$2'}
          size={'$2'}
          width={'$13'}
          onChangeText={ (value) => {
          handleInput(value, 'search')
          }}
          onSubmitEditing={() => fetchProductsWithSearch(search)}
        />
        <Button
          accessibilityLabel='Botão para desconectar'
          backgroundColor={'$pink8'}
          borderColor='$purple8'
          color={'$purple12'}
          marginLeft={'$4'}
          size="$1.5"
          width={'$4'}
          onPress={ () => {
            removeStorage('username');
            removeStorage('password');
            handleInput('', 'username');
            handleInput('', 'password');
            router.back()
          }}
          >
            Sair
        </Button>
      </YStack>
    
  )
}