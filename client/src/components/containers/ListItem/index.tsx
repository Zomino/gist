import React from 'react';
import styles from './ListItem.module.css';
import type Props from '../../../interfaces/Props';

export default function ListItem({ children }: Props): JSX.Element {
  return (
    <li className={styles.listItem}>
      {children}
    </li>
  );
}
