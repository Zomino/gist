import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Banner.module.css';

export default function Banner(): JSX.Element {
  return (
    <div className={styles.banner}>
      <Link className={styles.link} to="/">
        <h1 className={styles.heading}>GIST</h1>
      </Link>
    </div>
  );
}
