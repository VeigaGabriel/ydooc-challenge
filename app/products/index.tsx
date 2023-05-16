import { ScrollView  } from 'react-native';
import React, { useEffect, useState } from 'react'

import UserHeader from '../../src/components/UserHeader';
import { fetchAPI } from '../../src/services/fetchDummyAPI'
import { Product } from '../../src/components/Product';
import { usePeopleInfo } from '../../src/services/usePeopleInfo';
import { useProductInfo } from '../../src/services/useProductInfo';
import { IProductInfo } from '../../src/interfaces/IProductInfo';

export default function Products() {
  const [ productList, setProductList ] = useState<IProductInfo[]>([]);

  useEffect(() => {
    (async () => {
      const API = await fetchAPI('https://dummyjson.com/products');
      setProductList(API.products);
    })();
  }, [])

  const peopleInfo = usePeopleInfo(state => state.user);
  const { id, username, email, firstName, lastName, gender, image, token } = peopleInfo;

  return (
    <ScrollView>
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
        (productList.length > 0) && productList.map( p => (
            <Product { ...p } key={ p.id }/>
          ))
      }
    </ScrollView>
  )
};
