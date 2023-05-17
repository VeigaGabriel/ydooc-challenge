import React, { useEffect } from 'react'
import { Stack } from 'expo-router';
import { ScrollView, TamaguiProvider } from 'tamagui';
import config from '../../tamagui.config';

import UserHeader from '../../src/components/UserHeader';
import { Product } from '../../src/components/Product';
import { usePeopleInfo } from '../../src/services/usePeopleInfo';
import { useListProducts } from '../../src/services/useListProducts';

export default function Products() {
  const [ fetchProducts, products ] = useListProducts((state) => [ 
    state.fetchProducts, state.products
  ]);

  useEffect(() => {
    fetchProducts();
  }, [])

  const peopleInfo = usePeopleInfo(state => state.user);
  const { id, username, email, firstName, lastName, gender, image, token } = peopleInfo;
  return (
    <TamaguiProvider config={config}>
      <ScrollView backgroundColor={'$purple12'}>
        <Stack.Screen options={ { title: 'Produtos' } } />
        {/* <UserHeader
          id={id}
          username={username}
          email={email}
          firstName={firstName}
          lastName={lastName}
          gender={gender}
          image={image}
          token={token}
          /> */}
        {
          (products.length > 0) && products.map( p => (
              <Product { ...p } key={ p.id }/>
            ))
        }
      </ScrollView>
    </TamaguiProvider>
  )
};
