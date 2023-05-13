import { View, Text, Image, ScrollView  } from 'react-native';
import React, { useEffect, useState } from 'react'
import { Link } from 'expo-router';

import { fetchAPI } from '../../services/fetchAPI'

export default function Products() {
  const [ productList, setProductList ] = useState([])
  useEffect(() => {
    console.log('EXECUTANDOOOOOOOOOOOOOOOOO');
    (async () => {
      const API = await fetchAPI('https://dummyjson.com/products')
      console.log('API');
      console.log(API.products);
      setProductList(API.products)
      if (productList.length > 0) {
        console.log('SIIIIIIMMM');
        console.log(productList.length);
        console.log(productList[0].thumbnail);
      }

    })();
  }, [])
  return (
    <ScrollView>
      {
        (productList.length > 0) && productList.map( p => (
          <View key={p.id}>
          <Link href={`/products/${p.id}`}>
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

          )
        )
      }
    </ScrollView>
  )
};
