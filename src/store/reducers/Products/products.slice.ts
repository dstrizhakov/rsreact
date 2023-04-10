import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from 'types/Types';

export interface IProductListType {
  products: IProduct[];
}

const initialState: IProductListType = {
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      state.products = [...state.products, action.payload];
    },
  },
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
