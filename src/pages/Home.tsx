import Search from '../components/Search/Search';
import { FC } from 'react';
import ProductList from '../components/ProductList/ProductList';
import products from '../mock/products';

const Home: FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <Search />
      <div className="cards">
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default Home;
