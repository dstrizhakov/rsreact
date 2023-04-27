import { FC } from 'react';
import styles from './Preloader.module.scss';

const Preloader: FC = (): JSX.Element => (
  <div className={styles.progress}>
    <div className={styles.indeterminate}></div>
  </div>
);

export default Preloader;
