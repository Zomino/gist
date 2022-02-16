import { Link } from 'react-router-dom';
import { type Props } from 'components/interfaces';
import styles from './styles.module.css';

interface IconLinkProps extends Props { to: string }

export default function IconLink({ to, children }: IconLinkProps): JSX.Element {
  return (
    <Link className={styles.iconLink} to={to}>
      {children}
    </Link>
  );
}
