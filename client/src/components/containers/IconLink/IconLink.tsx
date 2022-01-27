// libraries
import { Link } from 'react-router-dom';
// types
import { type Props } from '../../../interfaces';
// styles
import styles from './IconLink.module.css';

interface IconLinkProps extends Props { to: string }

export default function IconLink({ to, children }: IconLinkProps): JSX.Element {
  return (
    <Link className={styles.iconLink} to={to}>
      {children}
    </Link>
  );
}
