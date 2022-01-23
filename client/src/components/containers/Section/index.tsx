// libraries
import React from 'react';
// styles
import styles from './Section.module.css';
// types
import type Props from '../../../interfaces/Props';

export default function Section({ children }: Props): JSX.Element {
  return (
    <div className={styles.sectionContainer}>
      {children}
    </div>
  );
}
