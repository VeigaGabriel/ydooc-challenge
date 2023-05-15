import { View, TextInput } from 'react-native'
import React from 'react'

import { IPeopleInfo } from '../services/fetchDummyAPI'
import { usePeopleInfo } from '../services/usePeopleInfo';

export default function UserHeader({
id,
username,
email,
firstName,
lastName,
gender,
}: IPeopleInfo) {
    // ------ TESTANDO ZUSTAND --------- //

    const peopleInfo = usePeopleInfo(state => state.user);

    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@', peopleInfo);
    
    // ----------------------------------//
  return (
    <View>
      <TextInput>{ username }</TextInput>
      <TextInput>{ email }</TextInput>
      <TextInput>{ firstName }</TextInput>
      <TextInput>{ lastName }</TextInput>
      <TextInput>{ gender }</TextInput>
    </View>
  )
}