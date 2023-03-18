import Search from '../components/Search';
import { Component, ReactNode } from 'react';

class Home extends Component {
  render(): ReactNode {
    return (
      <div>
        <h1>Home</h1>
        <Search />
      </div>
    );
  }
}

export default Home;
