import { type Props } from 'components/interfaces';
import styles from './styles.module.css';

export default function IconButtons({ children }: Props): JSX.Element {
  return <div className={styles.iconButtons}>{children}</div>;
}
