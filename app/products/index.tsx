import { ScrollView  } from 'react-native';
import React, { useEffect } from 'react'
import { Stack } from 'expo-router';

import UserHeader from '../../src/components/UserHeader';
import { Product } from '../../src/components/Product';
import { usePeopleInfo } from '../../src/services/usePeopleInfo';
import { useListProducts } from '../../src/services/useListProducts';

export default function Products() {
  // const [ productList, setProductList ] = useState<IProductInfo[]>([]);
  const [ fetchProducts, products ] = useListProducts((state) => [ 
    state.fetchProducts, state.products
  ]);

  useEffect(() => {
    fetchProducts();
  }, [])

  const peopleInfo = usePeopleInfo(state => state.user);
  const { id, username, email, firstName, lastName, gender, image, token } = peopleInfo;

  return (
    <ScrollView>
      <Stack.Screen options={ { title: 'Produtos' } } />
      <UserHeader
        id={id}
        username={username}
        email={email}
        firstName={firstName}
        lastName={lastName}
        gender={gender}
        image={image}
        token={token}
        />
      {
        (products.length > 0) && products.map( p => (
            <Product { ...p } key={ p.id }/>
          ))
      }
    </ScrollView>
  )
};
