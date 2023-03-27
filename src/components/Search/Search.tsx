import { Component, ReactNode } from 'react';
import styles from './Search.module.scss';

class Search extends Component<object, { query: string }> {
  constructor() {
    super({});
    this.state = { query: '' };
  }

  saveToLocalStotage = (): void => {
    localStorage.setItem('Query', this.state.query);
  };
  getFromLocalStorage = (): void => {
    this.setState({ query: localStorage.getItem('Query') || '' });
  };

  componentDidMount(): void {
    this.getFromLocalStorage();
  }
  componentWillUnmount(): void {
    this.saveToLocalStotage();
  }

  onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ query: event.target.value });
  };
  render(): ReactNode {
    return (
      <div className={styles.body}>
        <form onSubmit={(event) => event.preventDefault()} className={styles.form}>
          <div className={styles.search}>
            <input
              role="search"
              type="text"
              placeholder="Search query..."
              onChange={this.onChange}
              value={this.state.query}
            />
            <span>Error. Search query should be not empty.</span>
          </div>
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
