import React from 'react'
import { Stack } from 'expo-router';

import { Image, Progress, ScrollView, TamaguiProvider, Text, YStack } from 'tamagui';
import config from '../../../tamagui.config';

import { useProductInfo } from '../../../src/services/useProductInfo';

export default function Details() {
  const productInfo = useProductInfo(state => state.product);
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
  console.log(images);
  return (
    <TamaguiProvider config={config}>
      <ScrollView>
        <Stack.Screen options={ { title: 'Detalhes' } } />
        <YStack backgroundColor={ '$purple12'} height={'100%'}>
          <Image resizeMode='contain' source={{ uri: thumbnail }} marginLeft={'8%'} width={'84%'} height={'60%'} borderRadius={'$2'}/>
          <Text px="$6" fontFamily={'$body'} fontSize={'$9'} color={'$pink8'}>
              { title } | { rating }
          </Text>
          <Progress
            backgroundColor={'$pink6'}
            marginLeft={'8%'}
            value={rating * 2 * 10}
            width={'84%'}
          >
            <Progress.Indicator animation="bouncy" backgroundColor={'$pink10'}/>
          </Progress>
          <Text px="$6" fontFamily={'$body'} fontSize={'$6'} left={'$2'} textDecorationLine='line-through' color={'$pink8'}>
              R$: { price.toFixed(2) }
          </Text>

          <Text px="$6" fontFamily={'$body'} fontSize={'$9'} color={'$pink8'}>
              R$: { (price - discountPercentage).toFixed(2) }
          </Text>
          <Text px="$6" color={'$pink8'}>{ brand }</Text>
          <Text px="$6" color={'$pink8'}>{ category.toUpperCase() }</Text>
          <Text px="$6" fontFamily={'$body'} fontSize={'$4'} color={'$pink8'} marginTop={'$2'} marginBottom={'$2'}>
              { description }
          </Text>
          <Text px="$6" fontFamily={'$body'} fontSize={'$4'} color={'$pink8'}>
            Estoque: { stock }
          </Text>
        </YStack>
      </ScrollView>
    </TamaguiProvider>
  )
}