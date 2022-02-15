import styles from './Section.module.css';
import { type Props } from '../../interfaces';

export default function Section({ children }: Props): JSX.Element {
  return (
    <div className={styles.section}>
      {children}
    </div>
  );
}
