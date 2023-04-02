import { FC, useState } from 'react';
import styles from './Card.module.scss';
import likeIcon from '../../assets/heart-icon.svg';
import { IProduct } from 'types/Types';

const Card: FC<IProduct> = ({ image, title, text, price, likes, isAvailable, isSale }) => {
  const [like, setLike] = useState(likes ?? 0);

  const increment = (): void => {
    setLike((prev) => prev + 1);
  };

  return (
    <div className={styles.card}>
      <div className={styles.body}>
        {isSale && <span className={styles.sale}>Sale</span>}
        <div className={styles.image}>
          <img src={image} alt="image" />
        </div>
        <div className={styles.content}>
          <h2>{title}</h2>
          <p data-testid="custom-element">{text}</p>
        </div>
        <div className={styles.actions}>
          <span role="like" onClick={increment}>
            <img src={likeIcon} alt="like" />
            {like}
          </span>
          {isAvailable ? <h3>{price}USD</h3> : <h3>Not Avail</h3>}
        </div>
      </div>
    </div>
  );
};

export default Card;
