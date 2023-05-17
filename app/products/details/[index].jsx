import React from 'react'
import { Stack } from 'expo-router';

import { Image, ScrollView, TamaguiProvider, Text, YStack } from 'tamagui';
import config from '../../../tamagui.config';

import { useProductInfo } from '../../../src/services/useProductInfo';
import { Product } from '../../../src/components/Product';

export default function Details() {
  const productInfo = useProductInfo(state => state.product);
  console.log(productInfo);
  // productInfo.forEach((p, i) => console.log(`${i}: `, p))
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images
  } = productInfo;
  return (
    <TamaguiProvider config={config}>
      <ScrollView>
        <Stack.Screen options={ { title: 'Detalhes' } } />
        {/* <Product { ...productInfo } /> */}
        <YStack backgroundColor={ '$purple12'} height={'100%'}>
        <Image resizeMode='contain' source={{ uri: thumbnail }} marginLeft={'8%'} width={'84%'} height={'60%'} borderRadius={'$2'}/>
        <Text px="$6" fontFamily={'$body'} fontSize={'$9'} color={'$pink8'}>
            { title } | { rating }
        </Text>
        <Text px="$6" fontFamily={'$body'} fontSize={'$6'} left={'$2'} textDecorationLine='line-through' color={'$pink8'}>
            R$: { price.toFixed(2) }
        </Text>

        <Text px="$6" fontFamily={'$body'} fontSize={'$9'} color={'$pink8'}>
            R$: { (price - discountPercentage).toFixed(2) }
        </Text>
        <Text px="$6" color={'$pink8'}>{ brand }</Text>
        <Text px="$6" color={'$pink8'}>{ category.toUpperCase() }</Text>
        <Text px="$6" fontFamily={'$body'} fontSize={'$4'} color={'$pink8'}>
            { description }
        </Text>


        <Text px="$6" color={'$pink8'}>{ stock }</Text>

        </YStack>
      </ScrollView>
    </TamaguiProvider>
  )
}