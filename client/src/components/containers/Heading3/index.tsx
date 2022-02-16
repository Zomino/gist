import { type Props } from 'components/interfaces';
import styles from './styles.module.css';

export default function Heading3({ children }: Props): JSX.Element {
  return <h3 className={styles.heading3}>{children}</h3>;
}
