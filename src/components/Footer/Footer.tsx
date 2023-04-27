import { Component, ReactNode } from 'react';
import styles from './Footer.module.scss';
import logo from '../../assets/rs-school-js.svg';

class Footer extends Component {
  render(): ReactNode {
    return (
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.body}>
            <h4>
              <span> 2023</span>
              <a href="https://github.com/dstrizhakov" target="_blank" rel="noreferrer">
                Dmitry Strizhakov
              </a>
            </h4>
            <h4>
              <a href="https://rs.school/react/" target="_blank" rel="noreferrer">
                <img src={logo} alt="RSSchool" className={styles.logo} />
              </a>
            </h4>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
