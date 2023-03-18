import { Component, ReactNode } from 'react';
import { NavLink, Link } from 'react-router-dom';
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
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
              </nav>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
