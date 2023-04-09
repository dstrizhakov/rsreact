import { FC } from 'react';
import styles from './Modal.module.scss';

type ModalPropsType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
  variant?: 'simple' | 'button';
};

const Modal: FC<ModalPropsType> = ({ isOpen, setIsOpen, children, variant = 'button' }) => {
  return (
    <div className={isOpen ? styles.modal__active : styles.modal} onClick={() => setIsOpen(false)}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <span
          className={variant === 'button' ? styles.close : styles.none}
          onClick={() => setIsOpen(false)}
        >
          х
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
