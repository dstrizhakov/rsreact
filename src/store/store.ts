import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { unsplashAPI } from 'services/unsplashService';
import homeReducer from './reducers/Home/home.slice';
import productsReducer from './reducers/Products/products.slice';

const rootReducer = combineReducers({
  homeReducer,
  productsReducer,
  [unsplashAPI.reducerPath]: unsplashAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(unsplashAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
