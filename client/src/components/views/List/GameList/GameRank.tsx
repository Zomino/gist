import styles from './styles.module.css';

interface GameRankProps { index: number }

export default function GameRank({ index }: GameRankProps): JSX.Element {
  return (
    <span className={styles.gameRank}>
      {`#${index + 1}`}
    </span>
  );
}
