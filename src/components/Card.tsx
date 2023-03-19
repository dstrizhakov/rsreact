import { Component } from 'react';
import styles from './Card.module.scss';
import like from '../assets/heart-icon.svg';

export interface CardProps {
  id: number;
  image: string;
  title: string;
  text: string;
  price: number;
  likes?: number;
}

class Card extends Component<CardProps> {
  state = { likes: this.props.likes || 0 };
  render() {
    return (
      <div className={styles.card}>
        <div className={styles.body}>
          <div className={styles.image}>
            <img src={`../../public/${this.props.image}`} alt="image" />
          </div>
          <div className={styles.content}>
            <h2>{this.props.title}</h2>
            <p>{this.props.text}</p>
          </div>
          <div className={styles.actions}>
            <span>
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
