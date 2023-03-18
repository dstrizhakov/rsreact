import { Component, ReactNode } from 'react';
import styles from './Footer.module.scss';

class Footer extends Component {
  render(): ReactNode {
    return (
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.body}>
            <div>Copyright</div>
            <div>Footer menu</div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
