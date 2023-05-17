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
      <YStack display='flex' flexDirection='row' justifyContent='space-between' padding={'$3'}>
        <Text color={'white'}>{ `${firstName} ${lastName}` }</Text>
        <Input 
          size={'$2'}
          padding={'$2'}
          width={'$10'}
          onChangeText={ (value) => {
          handleInput(value, 'search')
          }}
          onSubmitEditing={() => fetchProductsWithSearch(search)}
        />
        <Button
          accessibilityLabel='Botão para fazer o login'
          backgroundColor={'black'}
          color={'white'}
          borderColor='$pink10Dark'
          borderRadius={1}
          width={'$10'}
          onPress={ () => {
            removeStorage('username');
            removeStorage('password');
            handleInput('', 'username');
            handleInput('', 'password');
            router.back()
          }}
          size="$1.5"
          >Desconectar
        </Button>
      </YStack>
    
  )
}