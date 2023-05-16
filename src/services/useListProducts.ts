import { create }from 'zustand';
import { fetchAPI } from './fetchDummyAPI';
import { Alert } from 'react-native';
import { IProductInfo } from '../interfaces/IProductInfo';



type StoreState = {
  products: IProductInfo[];
  fetchProducts: () => Promise<void>;
}

export const useListProducts = create<StoreState>((set) => ({
  products: [],
  fetchProducts: async () => {
    try {
      const API = await fetchAPI('https://dummyjson.com/products');
      set({ products: API.products });
    } catch (e) {
      Alert.alert('Ocorreu um erro ao buscar os produtos:', (e as Error).message);
    }
  },
}));

// const [ fetchProducts, products ] = useListProducts((state) => [ 
//   state.fetchProducts, state.products
// ]);
