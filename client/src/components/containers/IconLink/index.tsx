import React from 'react';
import { Link } from 'react-router-dom';
import styles from './IconLink.module.css';
import type Props from '../../../interfaces/Props';

interface IconLinkProps extends Props {
  to: string
}

export default function IconLink({ to, children }: IconLinkProps): JSX.Element {
  return (
    <Link
      className={styles.iconLink}
      to={to}
    >
      {children}
    </Link>
  );
}
