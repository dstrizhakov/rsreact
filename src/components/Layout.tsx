import { Component, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

class Layout extends Component {
  render(): ReactNode {
    return (
      <div className="wrapper">
        <Header />
        <main className="main">
          <div className="container">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
