import Search from '../components/Search/Search';
import { FC, useEffect, useState } from 'react';
import ProductList from '../components/ProductList/ProductList';
import { IProduct } from 'types/Types';
import LoadIcon from '../assets/loader.svg';
import { convertUpsplashToProducts } from '../utils/apiUtils';
import { useAppSelector } from '../hooks/redux';
import { unsplashAPI } from '../services/unsplashService';

const Home: FC = () => {
  const queryFromStore = useAppSelector((store) => store.homeReducer.query);
  const {
    data: apiProducts,
    isLoading,
    isError,
  } = unsplashAPI.useSearchPhotosQuery(queryFromStore);

  const [currentProducts, setCurrentProducts] = useState<IProduct[]>();

  useEffect(() => {
    setCurrentProducts(convertUpsplashToProducts(apiProducts || []));
  }, [apiProducts]);

  return (
    <div>
      <h1>Home</h1>
      <Search />
      {isError && <h2>Ошибка API, смотри консоль...</h2>}
      {isLoading && <img src={LoadIcon} alt="Loading..." />}
      <div className="cards">{currentProducts && <ProductList products={currentProducts} />}</div>
    </div>
  );
};

export default Home;
