// libraries
import React from 'react';
import { Oval } from 'react-loader-spinner';
// styles
import styles from './Spinner.module.css';

export default function Spinner(): JSX.Element {
  return (
    <div className={styles.container}>
      <Oval
        color="#C7D5E0"
        secondaryColor="#C7D5E0"
        height={40}
      />
    </div>
  );
}
