import { type Props } from '../../interfaces';
import styles from './styles.module.css';

export default function View({ children }: Props): JSX.Element {
  return (
    <div className={styles.view}>
      {children}
    </div>
  );
}
