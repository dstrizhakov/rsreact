import { FC, useEffect, useState } from 'react';
import styles from './Search.module.scss';

const Search: FC = () => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    getFromLocalStorage();
  }, []);

  useEffect(() => {
    return () => {
      saveToLocalStotage();
    };
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value);
  };

  const saveToLocalStotage = (): void => {
    localStorage.setItem('Query', query);
  };

  const getFromLocalStorage = (): void => {
    const savedQuery = localStorage.getItem('Query') || '';
    setQuery(savedQuery);
  };

  return (
    <div className={styles.body}>
      <form onSubmit={(event) => event.preventDefault()} className={styles.form}>
        <div className={styles.search}>
          <input
            role="search"
            type="text"
            placeholder="Search query..."
            onChange={onChange}
            value={query}
          />
          <span>Error. Search query should be not empty.</span>
        </div>
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
