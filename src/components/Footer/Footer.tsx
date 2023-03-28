import { Component, ReactNode } from 'react';
import styles from './Footer.module.scss';

class Footer extends Component {
  render(): ReactNode {
    return (
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.body}>
            <h4>Copyright 2023</h4>
            <h4>RSSCHOOL 2023</h4>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
