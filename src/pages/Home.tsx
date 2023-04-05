import Search from '../components/Search/Search';
import { FC, useEffect, useState } from 'react';
import ProductList from '../components/ProductList/ProductList';
import { IProduct, IUnsplashItem } from 'types/Types';
import Modal from '../components/Modal/Modal';

const Home: FC = () => {
  const [currentProducts, setCurrentProducts] = useState<IProduct[]>();
  const [query, setQuery] = useState<string>();
  const [modal, setModal] = useState<boolean>(false);
  const UNSPLASH_ACCESS_KEY = 'GQpboVLxSu8scxvDv9g3SOJtb4cEg3q9t5ekYwiivas';
  const orientation = 'landscape';
  const limit = 12;
  const url = `https://api.unsplash.com/photos/random?orientation=${orientation}&query=${query}&count=${limit}&client_id=${UNSPLASH_ACCESS_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const prod = data.map((item: IUnsplashItem) => {
          return {
            id: item.id,
            image: item.urls.small,
            type: 'image',
            title: item.user.name,
            text: (item.description && item.description.slice(0, 30)) || 'no description',
            price: '3.5',
            likes: item.likes,
            created: item.created_at,
            isAvailable: true,
            isSale: false,
          };
        });
        setCurrentProducts(prod);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(`Ошибка: ${error.message}`);
          console.error(
            `Внимание! В API Unsplach есть лимит запросов, если сервер отвечает 403 статусом, нужно подождать 10-15 минут.`
          );
        } else {
          console.error('Неизвестная ошибка');
          throw error;
        }
        setModal(true);
      }
    };
    fetchData();
  }, [query, url]);

  const handleSetQuery = (newQuery: string) => {
    setQuery(newQuery);
  };
  return (
    <div>
      <h1>Home</h1>
      <Search handleSetQuery={handleSetQuery} />
      {modal && (
        <Modal isOpen={modal} setIsOpen={setModal}>
          <h2>Ошибка API, смотри консоль...</h2>
        </Modal>
      )}
      <div className="cards">{currentProducts && <ProductList products={currentProducts} />}</div>
    </div>
  );
};

export default Home;
