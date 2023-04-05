import { FC, useState } from 'react';
import styles from './CardDetail.module.scss';
import likeIcon from '../../assets/heart-icon.svg';
import { IProduct } from 'types/Types';

const CardDetail: FC<IProduct> = ({
  big,
  title,
  text,
  price,
  likes,
  created,
  isAvailable,
  isSale,
}) => {
  const [like, setLike] = useState(likes ?? 0);

  const increment = (): void => {
    setLike((prev) => prev + 1);
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.body}>
          {isSale && <span className={styles.sale}>Sale</span>}
          <div className={styles.image}>
            <img src={big} alt="image" />
          </div>
          <div className={styles.content}>
            <div className={styles.row}>
              <h2>Title: {title}</h2>
              <h3>Created: {created}</h3>
            </div>
            <p data-testid="custom-element">Describtion: {text}</p>
          </div>
          <div className={styles.actions}>
            <span role="like" onClick={increment}>
              <img src={likeIcon} alt="like" />
              {like}
            </span>
            {isAvailable ? <h3>Price: {price}USD</h3> : <h3>Not Avail</h3>}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
