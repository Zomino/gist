import { Direction, RankButton } from './RankButton';
import actions from '../state/actions';
import { useListEditorContext } from '../context';
import styles from './styles.module.css';

interface RankButtonsProps { index: number }

export default function RankButtons({ index }: RankButtonsProps): JSX.Element | null {
  const context = useListEditorContext();
  if (!context) return null;
  const { list, dispatch } = context;

  const incrementRank = (): void => {
    dispatch(actions.incrementRank(index));
  };

  const decrementRank = (): void => {
    dispatch(actions.decrementRank(index));
  };

  return (
    <div className={styles.rankButtons}>
      {index > 0
        ? <RankButton direction={Direction.up} onClick={incrementRank} />
        : null}
      {index < list.games.length - 1
        ? <RankButton direction={Direction.down} onClick={decrementRank} />
        : null}
    </div>
  );
}
