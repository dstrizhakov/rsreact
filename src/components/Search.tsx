import { Component, ReactNode } from 'react';
import styles from './Search.module.scss';

class Search extends Component {
  componentDidMount(): void {}
  componentWillUnmount(): void {}

  render(): ReactNode {
    return (
      <div className={styles.body}>
        <form action="submit" className={styles.form}>
          <div className={styles.search}>
            <input type="text" placeholder="Search query..." />
            <span>Error. Search query should be not empty.</span>
          </div>
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
