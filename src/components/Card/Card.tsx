import { Component, ReactNode } from 'react';
import styles from './Card.module.scss';
import like from '../../assets/heart-icon.svg';
import { IProduct } from 'types/Types';

type CardState = {
  likes: number;
};

class Card extends Component<IProduct, CardState> {
  state = { likes: this.props.likes || 0 };
  increment = (): void => {
    this.setState({ likes: this.state.likes + 1 });
  };
  render(): ReactNode {
    return (
      <div className={styles.card}>
        <div className={styles.body}>
          <div className={styles.image}>
            <img src={this.props.image} alt="this.props.image" />
          </div>
          <div className={styles.content}>
            <h2>{this.props.title}</h2>
            <p data-testid="custom-element">{this.props.text}</p>
          </div>
          <div className={styles.actions}>
            <span role="like" onClick={this.increment}>
              <img src={like} alt="like" />
              {this.state.likes}
            </span>
            <h3>{this.props.price}USD</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
