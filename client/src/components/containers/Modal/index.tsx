import { IoIosCloseCircle } from 'react-icons/io';
import { type Props } from '../../interfaces';
import styles from './styles.module.css';

interface ModalProps extends Props { closeModal: () => void }

export default function Modal({ closeModal, children }: ModalProps): JSX.Element {
  return (
    <>
      <div
        className={styles.background}
        onClick={closeModal}
        onKeyDown={closeModal}
      />
      <div className={styles.modal}>
        <div className={styles.header}>
          <IoIosCloseCircle
            className={styles.closeButton}
            onClick={closeModal}
          />
        </div>
        {children}
      </div>
    </>
  );
}
