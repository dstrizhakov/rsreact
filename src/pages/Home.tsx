import Search from '../components/Search';
import { Component, ReactNode } from 'react';
import ProductList from '../components/ProductList';

const products = [
  {
    id: 1,
    image: 'product01.jpg',
    title: 'Arizona valley',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 120,
    likes: 27,
  },
  {
    id: 2,
    image: 'product02.jpg',
    title: 'Arizona valley',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 160,
    likes: 0,
  },
  {
    id: 3,
    image: 'product03.jpg',
    title: 'Arizona valley',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 100,
    likes: 10,
  },
];

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
