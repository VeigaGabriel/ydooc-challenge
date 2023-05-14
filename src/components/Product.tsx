import { View, Text, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

export interface IProductProps {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  brand: string;
  category: string;
}

export function Product( {
  id,
  thumbnail,
  title,
  description,
  price,
  stock,
  brand,
  category,
}: IProductProps ) {
  return (
    <View key={ id }>
    <Link href={`/products/details/${ id }`}>
      <View>
        <Image source={{ uri: thumbnail }} style={{ width: 200, height: 200 }}/>
        <Text>{ id }</Text>
        <Text>{ title }</Text>
        <Text>{ description }</Text>
        <Text>Price: ${ price.toFixed(2)}</Text>
        <Text>Stock: { stock }</Text>
        <Text>Brand: { brand }</Text>
        <Text>Category: { category }</Text>
        <Text></Text>
      </View>
    </Link>
    </View>
  )
}