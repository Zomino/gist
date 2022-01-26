// libraries
import React from 'react';
import { Link } from 'react-router-dom';
// styles
import styles from './Banner.module.css';

export default function Banner(): JSX.Element {
  return ( // links to MyLists
    <div className={styles.banner}>
      <Link className={styles.link} to="/">
        <h1 className={styles.heading}>GIST</h1>
      </Link>
    </div>
  );
}
