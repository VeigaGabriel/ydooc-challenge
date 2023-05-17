import { View, TextInput } from 'react-native'
import React from 'react'

import { IPeopleInfo } from '../interfaces/IPeopleInfo';
import { usePeopleInfo } from '../services/usePeopleInfo';
import { Button } from 'tamagui';
import { useRouter } from 'expo-router';
import { removeStorage } from '../services/storageFuncs';
import { useHandleChange } from '../services/useHandleChange';

export default function UserHeader({
id,
username,
email,
firstName,
lastName,
gender,
}: IPeopleInfo) {
  const [ handleInput ] = useHandleChange(state => [ state.handleInput ])
  const router = useRouter();
  return (
    <View>
      <TextInput>{ username }</TextInput>
      <TextInput>{ email }</TextInput>
      <TextInput>{ firstName }</TextInput>
      <TextInput>{ lastName }</TextInput>
      <TextInput>{ gender }</TextInput>
      <Button
        accessibilityLabel='Botão para fazer o login'
        backgroundColor={'black'}
        color={'white'}
        borderColor='$pink10Dark'
        borderRadius={1}
        onPress={ () => {
          removeStorage('username');
          removeStorage('password');
          handleInput('', 'username');
          handleInput('', 'password');
          router.back()
        }}
        size="$6"
        >Desconectar
      </Button>
    </View>
    
  )
}