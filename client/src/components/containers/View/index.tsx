// libraries
import React from 'react';
// styles
import styles from './View.module.css';
// types
import type Props from '../../../interfaces/Props';

export default function View({ children }: Props): JSX.Element {
  return (
    <div className={styles.viewContainer}>
      {children}
    </div>
  );
}
