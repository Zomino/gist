// libraries
import React from 'react';
// types
import { type Props } from '../../../interfaces';
// styles
import styles from './ListItem.module.css';

export default function ListItem({ children }: Props): JSX.Element {
  return (
    <li className={styles.listItem}>
      {children}
    </li>
  );
}
