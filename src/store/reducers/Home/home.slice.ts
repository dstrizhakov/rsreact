import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUnsplash } from 'types/Unsplash';

export interface IHome {
  query: string;
  cards: IUnsplash[];
}

const initialState: IHome = {
  query: '',
  cards: [],
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setCards: (state, action: PayloadAction<IUnsplash[]>) => {
      state.cards = action.payload;
    },
  },
});

export const { setQuery, setCards } = homeSlice.actions;
export default homeSlice.reducer;
