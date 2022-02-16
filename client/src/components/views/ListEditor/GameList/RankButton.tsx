import { IoCaretDown, IoCaretUp } from 'react-icons/io5';
import styles from './styles.module.css';

export enum Direction {
  up,
  down,
}

interface RankButtonProps {
  direction: Direction,
  onClick: () => void,
}

export function RankButton({ direction, onClick }: RankButtonProps): JSX.Element {
  return (
    <div className={styles.rankButton}>
      {direction === Direction.up && <IoCaretUp onClick={onClick} />}
      {direction === Direction.down && <IoCaretDown onClick={onClick} />}
    </div>
  );
}

export default RankButton;
