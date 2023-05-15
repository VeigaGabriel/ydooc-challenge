import { View, TextInput } from 'react-native'
import React from 'react'

import { IPeopleInfo } from '../models/IPeopleInfo';
import { usePeopleInfo } from '../services/usePeopleInfo';

export default function UserHeader({
id,
username,
email,
firstName,
lastName,
gender,
}: IPeopleInfo) {
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