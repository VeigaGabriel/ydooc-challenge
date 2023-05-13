import { View, Text, Image, ScrollView  } from 'react-native';
import React, { useEffect, useState } from 'react'
import { Link } from 'expo-router';

import { fetchAPI } from '../../services/fetchAPI'
import { pink } from '@tamagui/theme-base';

export default function Products() {
  const [ productList, setProductList ] = useState([])
  useEffect(() => {
    (async () => {
      const API = await fetchAPI('https://dummyjson.com/products')
      setProductList(API.products)
      if (productList.length > 0) {
      }

    })();
  }, [])
  return (
    <ScrollView>
      {
        (productList.length > 0) && productList.map( p => (
          <View key={p.id}>
          <Link href={`/products/details`}>
            <View>
              <Image source={{ uri: p.thumbnail }} style={{width: 200, height: 200}}/>
              <Text>{p.id}</Text>
              <Text>{p.title}</Text>
              <Text>{p.description}</Text>
              <Text>Price: ${p.price.toFixed(2)}</Text>
              <Text>Stock: {p.stock}</Text>
              <Text>Brand: {p.brand}</Text>
              <Text>Category: {p.category}</Text>
              <Text></Text>
            </View>
          </Link>
          </View>
          ))}

    </ScrollView>
  )
};
