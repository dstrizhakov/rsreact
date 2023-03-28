import Search from '../components/Search/Search';
import { Component, ReactNode } from 'react';
import ProductList from '../components/ProductList/ProductList';
import products from '../mock/products';

class Home extends Component {
  render(): ReactNode {
    return (
      <div>
        <h1>Home</h1>
        <Search />
        <div className="cards">
          <ProductList products={products} />
        </div>
      </div>
    );
  }
}

export default Home;
