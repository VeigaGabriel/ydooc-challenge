import { create } from "zustand";
import { IProductInfo } from "../interfaces/IProductInfo";

type State = {
  product: IProductInfo;
  addProductInfo: ( state: IProductInfo ) => void;
}

const infos = {
  id: 0,
  title: '',
  description: '',
  price: 0,
  discountPercentage: 0,
  rating: 0,
  stock: 0,
  brand: '',
  category: '',
  thumbnail: '',
  images: [''],
}

export const useProductInfo = create<State>((set) => ({
  product: {
    ...infos
  },
    addProductInfo: ( product: IProductInfo ) => {
    set(( state: State ) => ({ product }))
  }
}))