import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setQuery } from '../../store/reducers/Home/home.slice';
import { FC, useEffect, useState } from 'react';
import styles from './Search.module.scss';

const Search: FC = () => {
  const [search, setSearch] = useState('');
  const dispatch = useAppDispatch();
  const currentQuery = useAppSelector((store) => store.homeReducer.query);

  useEffect(() => {
    setSearch(currentQuery);
  }, [currentQuery]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (search.length >= 3) {
      dispatch(setQuery(search));
    }
  };

  return (
    <div className={styles.body}>
      <form onSubmit={(event) => onSubmit(event)} className={styles.form}>
        <div className={styles.search}>
          <input
            role="search"
            data-testid="search-input"
            type="text"
            placeholder="Enter at least 3 symbols..."
            onChange={onChange}
            value={search}
          />
          <span>Error. Search query should be not empty.</span>
        </div>
        <button data-testid="search-button">Search</button>
      </form>
    </div>
  );
};

export default Search;
