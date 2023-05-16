import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useProductInfo } from '../../../src/services/useProductInfo';
import { Product } from '../../../src/components/Product';

export default function Details() {
  const productInfo = useProductInfo(state => state.product);
  console.log(productInfo);
  return (
    <ScrollView>
      <Product { ...productInfo } />
    </ScrollView>
  )
}