import { type Props } from 'components/interfaces';
import styles from './styles.module.css';

export default function IconButton({ children }: Props): JSX.Element {
  return <div className={styles.iconButton}>{children}</div>;
}
