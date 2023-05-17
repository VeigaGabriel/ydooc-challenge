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
        // space="$0"
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
            // width={150}
            // height={'100%'}
            // borderTopLeftRadius={11}
            // borderBottomLeftRadius={11}
            // borderWidth={4}
            // borderColor={'black'}
            />
          <YStack 
            px="$2"
            // backgroundColor={'$red10Light'}
            padding={'$2'}
            width={'$17'}
            height={ '100%'}
            borderTopRightRadius={'$6'}
            borderBottomRightRadius={ '$6'}
            borderColor={'$pink10Dark'}
            borderRightWidth='$1.5'
            borderBottomWidth='$1.5'
            backgroundColor={'$pink5Light'}
            // shadowRadius={'$10'}
            // shadowOffset={'$10'}
            // shadowColor={'red'}
            // shadowOpacity={ 1 }
            > 
          {/* <Text>{ id }</Text> */}
          <Text fontFamily={'$body'} fontSize={'$8'}>{ title } | {rating }</Text>
          {/* <Text fontFamily={'$body'} fontSize={'$5'}>Rating: { rating }</Text> */}
          <Text fontFamily={'$body'} fontSize={'$4'} numberOfLines={3} ellipsizeMode="tail">{ description }</Text>
          <Text fontFamily={'$body'} fontSize={'$6'} position='absolute' bottom={'$6'} left={'$2'} textDecorationLine='line-through' color={'$gray10'}>R$: { price.toFixed(2) }</Text>
          <Text fontFamily={'$body'} fontSize={'$9'} position='absolute' bottom={'$0'} left={'$2'}>R$: { (price - discountPercentage).toFixed(2) }</Text>
          {/* <Text>Stock: { stock }</Text> */}
          {/* <Text>Brand: { brand }</Text> */}
          {/* <Text>Category: { category }</Text> */}
          </YStack>
      </XStack>
    </TouchableOpacity>
  )
}