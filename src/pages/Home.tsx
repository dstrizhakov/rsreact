import Search from '../components/Search/Search';
import { FC, useEffect, useState } from 'react';
import ProductList from '../components/ProductList/ProductList';
import { IProduct } from 'types/Types';
import { convertUpsplashToProducts } from '../utils/apiUtils';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setCards } from '../store/reducers/Home/home.slice';
import { unsplashAPI } from '../services/unsplashService';
import Preloader from '../components/Preloader/Preloader';

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const queryFromStore = useAppSelector((store) => store.homeReducer.query);
  const productsFromStore = useAppSelector((store) => store.homeReducer.cards);

  const {
    data: apiProducts,
    isLoading,
    isError,
  } = unsplashAPI.useSearchPhotosQuery(queryFromStore);

  const [currentProducts, setCurrentProducts] = useState<IProduct[]>();

  useEffect(() => {
    setCurrentProducts(convertUpsplashToProducts(productsFromStore || []));
  }, [productsFromStore]);

  useEffect(() => {
    dispatch(setCards(apiProducts || []));
  }, [apiProducts, dispatch]);

  return (
    <div>
      <h1>Home</h1>
      <Search />
      {isError && <h2>Ошибка API, смотри консоль...</h2>}
      {isLoading ? <Preloader /> : <ProductList products={currentProducts || []} />}
    </div>
  );
};

export default Home;
