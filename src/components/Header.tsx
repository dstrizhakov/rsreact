import { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

class Header extends Component {
  render(): ReactNode {
    return (
      <>
        <header className={styles.header}>
          <div className={styles.container}>
            <div className={styles.body}>
              <div className={styles.logo}>
                <Link to={'/'}>LOGO</Link>
              </div>
              <nav className={styles.nav}>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
              </nav>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
