/* eslint-disable jsx-a11y/no-static-element-interactions */

// libraries
import { IoIosCloseCircle } from 'react-icons/io';
// types
import { type Props } from '../../../interfaces';
// styles
import styles from './Modal.module.css';

interface ModalProps extends Props { closeModal: () => void }

export default
function Modal({ closeModal, children }: ModalProps): JSX.Element {
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
