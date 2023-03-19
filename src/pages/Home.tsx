import Search from '../components/Search';
import { Component, ReactNode } from 'react';
import Card from '../components/Card';

// const items = [
// 	item: {
// 		id: 1,
// 		image: "product01.jpg",
// 		title: "Arizona valley",
// 		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
// 		price: 120,
// 		likes: 27,
// 	}
// ]

class Home extends Component {
  render(): ReactNode {
    return (
      <div>
        <h1>Home</h1>
        <Search />
        <div className="cards">
          <Card id={1} image="product01.jpg" title="my title" text="lorem" price={120} likes={27} />
        </div>
      </div>
    );
  }
}

export default Home;
