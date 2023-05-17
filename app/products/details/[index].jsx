import { ScrollView } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';

import { TamaguiProvider } from 'tamagui';
import config from '../../../tamagui.config';

import { useProductInfo } from '../../../src/services/useProductInfo';
import { Product } from '../../../src/components/Product';

export default function Details() {
  const productInfo = useProductInfo(state => state.product);
  console.log(productInfo);
  return (
    <TamaguiProvider config={config}>
      <ScrollView>
        <Stack.Screen options={ { title: 'Detalhes' } } />
        <Product { ...productInfo } />
      </ScrollView>
    </TamaguiProvider>
  )
}