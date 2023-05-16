import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router';

import { IProductInfo } from '../interfaces/IProductInfo';
import { useProductInfo } from '../services/useProductInfo';
import { fetchAPI } from '../services/fetchDummyAPI';

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
      <View>
          <Image source={{ uri: thumbnail }} style={{ width: 200, height: 200 }}/>
          <Text>{ id }</Text>
          <Text>{ title }</Text>
          <Text>{ description }</Text>
          <Text>Price: ${ price }</Text>
          <Text>Discount: ${ discountPercentage }</Text>
          <Text>Rating: { rating }</Text>
          <Text>Stock: { stock }</Text>
          <Text>Brand: { brand }</Text>
          <Text>Category: { category }</Text>
          <Text></Text>
      </View>
    </TouchableOpacity>
  )
}