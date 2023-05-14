import { ScrollView  } from 'react-native';
import React, { useEffect, useState } from 'react'

import { fetchAPI } from '../../src/services/fetchDummyAPI'
import { Product } from '../../src/components/Product';
// import UserHeader from '../../src/components/UserHeader';
import { IProductProps } from '../../src/components/Product';

export default function Products() {
  const [ productList, setProductList ] = useState<IProductProps[]>([])
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
      {/* <UserHeader /> */}
      {
        (productList.length > 0) && productList.map( p => (
          <Product { ...p } />
          ))
      }
    </ScrollView>
  )
};
