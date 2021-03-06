import { type Props } from 'components/interfaces';
import styles from './styles.module.css';

export default function Heading2({ children }: Props): JSX.Element {
  return <h2 className={styles.heading2}>{children}</h2>;
}
