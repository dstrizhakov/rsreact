import { FC } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../assets/react.svg';

const Header: FC = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.body}>
            <div className={styles.logo}>
              <Link to={'/'}>
                <img src={logo} height="20px" alt="logo" />
                <h4>RS REACT</h4>
              </Link>
            </div>
            <nav className={styles.nav}>
              <NavLink to={'/'}>Home</NavLink>
              <NavLink to={'/form'}>Form</NavLink>
              <NavLink to={'/about'}>About</NavLink>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
