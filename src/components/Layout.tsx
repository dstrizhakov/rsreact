import { Component, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

class Layout extends Component {
  render(): ReactNode {
    return (
      <div className="wrapper">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
