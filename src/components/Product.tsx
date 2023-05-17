import { TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';

import { IProductInfo } from '../interfaces/IProductInfo';
import { useProductInfo } from '../services/useProductInfo';
import { fetchAPI } from '../services/fetchDummyAPI';
import { XStack, YStack, Text, Image } from 'tamagui';

export function Product( {
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
  images,
}: IProductInfo ) {
  const productInfo = useProductInfo( state => state.addProductInfo );

  const TESTE = async ( id: number ) => {
    const retornoAPI = await fetchAPI(`https://dummyjson.com/products/${id}`);
    productInfo(retornoAPI);
  }

  const router = useRouter();

  const handleRedirect = ( directory: string ) => {
    router.push(directory)
  };

  return (
    <TouchableOpacity 
    key={ id } 
    onPress={ () => {
      TESTE(id);
      handleRedirect(`/products/details/${id}`)
    } }
    >
      <XStack
        display='flex'
        height={'$14'}
        w={'85%'}
        marginLeft={'5%'}
        marginTop={ '3%' }
        borderRadius={'$4'}
        >
          <Image source={{ uri: thumbnail }} 
          style={{ 
            width: 150,
            height: '100%',
            borderTopLeftRadius: 11,
            borderBottomLeftRadius: 11,
            // borderWidth: 4,      // WARNING
            // borderColor: 'black',// !!
            }}
            resizeMode='cover'
            // width={150}
            // height={'100%'}
            // borderTopLeftRadius={11}
            // borderBottomLeftRadius={11}
            // borderWidth={4}
            // borderColor={'black'}
            />
          <YStack 
            px="$2"
            padding={'$2'}
            width={'$16'}
            height={ '100%'}
            borderTopRightRadius={'$6'}
            borderBottomRightRadius={ '$6'}
            borderColor={'$purple8'}
            borderWidth='$0.75'
            backgroundColor={'$pink8'}
            > 
          <Text fontFamily={'$body'} fontSize={'$8'} color={'$purple12'}>
            { title } | { rating }
          </Text>
          <Text fontFamily={'$body'} fontSize={'$4'} numberOfLines={3} ellipsizeMode="tail" color={'$purple12'}>
            { description }
          </Text>
          <Text fontFamily={'$body'} fontSize={'$6'} position='absolute' bottom={'$6'} left={'$2'} textDecorationLine='line-through' color={'$purple12'}>
            R$: { price.toFixed(2) }
          </Text>
          <Text fontFamily={'$body'} fontSize={'$9'} position='absolute' bottom={'$0'} left={'$2'} color={'$purple12'}>
            R$: { (price - discountPercentage).toFixed(2) }
          </Text>
          </YStack>
      </XStack>
    </TouchableOpacity>
  )
}