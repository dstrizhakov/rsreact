import Search from '../components/Search/Search';
import { FC, useCallback, useEffect, useState } from 'react';
import ProductList from '../components/ProductList/ProductList';
import { IProduct } from 'types/Types';
import Modal from '../components/Modal/Modal';
import LoadIcon from '../assets/loader.svg';
import { getUnsplashPhotos } from '../Api/Api';
import { convertUpsplashToProducts } from '../utils/apiUtils';

const Home: FC = () => {
  const [currentProducts, setCurrentProducts] = useState<IProduct[]>();
  const [query, setQuery] = useState<string>('React');
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchProducts = useCallback(async (query: string): Promise<void> => {
    setIsLoading(true);
    try {
      const data = await getUnsplashPhotos(query);
      setCurrentProducts(convertUpsplashToProducts(data));
      setIsLoading(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Ой, ошибка...: ${error.message}`);
      } else {
        console.error('Неизвестная ошибка, прокидываю дальше...');
        throw error;
      }
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts(query);
  }, [fetchProducts, query]);

  useEffect(() => {
    getFromLocalStorage();
  }, []);

  useEffect(() => {
    return () => {
      saveToLocalStotage();
    };
  });

  const saveToLocalStotage = (): void => {
    if (query) localStorage.setItem('Query', query);
  };

  const getFromLocalStorage = (): void => {
    const savedQuery = localStorage.getItem('Query') || '';
    setQuery(savedQuery);
  };

  const handleSetQuery = (newQuery: string) => {
    setQuery(newQuery);
  };

  return (
    <div>
      <h1>Home</h1>
      <Search handleSetQuery={handleSetQuery} />
      <Modal isOpen={isError} setIsOpen={setIsError}>
        <h2>Ошибка API, смотри консоль...</h2>
      </Modal>
      <Modal isOpen={isLoading} setIsOpen={setIsLoading} variant="simple">
        <img src={LoadIcon} alt="Loading..." />
      </Modal>
      <div className="cards">{currentProducts && <ProductList products={currentProducts} />}</div>
    </div>
  );
};

export default Home;
