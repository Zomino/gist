import { type Props } from 'components/interfaces';
import styles from './styles.module.css';

export default function Container({ children }: Props): JSX.Element {
  return (
    <div className={styles.containerOuter}>
      <div className={styles.containerInner}>
        {children}
      </div>
    </div>
  );
}
