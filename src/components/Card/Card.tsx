import { FC, useState } from 'react';
import styles from './Card.module.scss';
import likeIcon from '../../assets/heart-icon.svg';
import { IProduct } from 'types/Types';
import Modal from '../Modal/Modal';
import CardDetail from '../CardDetail/CardDetail';

const Card: FC<IProduct> = ({
  id,
  image,
  big,
  title,
  text,
  price,
  created,
  likes,
  isAvailable,
  isSale,
}) => {
  const [like, setLike] = useState(likes ?? 0);
  const [modal, setModal] = useState(false);

  const increment = (): void => {
    setLike((prev) => prev + 1);
  };
  const handleClick = () => {
    setModal(true);
  };

  return (
    <>
      <Modal isOpen={modal} setIsOpen={setModal}>
        <CardDetail
          id={id}
          image={image}
          big={big}
          title={title}
          text={text}
          price={price}
          likes={likes}
          created={created}
          isAvailable={isAvailable}
          isSale={isSale}
        />
      </Modal>
      <div className={styles.card} onClick={() => handleClick()}>
        <div className={styles.body}>
          {isSale && <span className={styles.sale}>Sale</span>}
          <div className={styles.image}>
            <img src={image} alt="image" />
          </div>
          <div className={styles.content}>
            <h2 data-testid="card-title">{title}</h2>
            <p data-testid="card-text">{text}</p>
          </div>
          <div className={styles.actions}>
            <span data-testid="card-like" role="like" onClick={increment}>
              <img src={likeIcon} alt="like" />
              {like}
            </span>
            {isAvailable ? (
              <h3 data-testid="card-price">{price}USD</h3>
            ) : (
              <h3 data-testid="card-price-na">Not Avail</h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
