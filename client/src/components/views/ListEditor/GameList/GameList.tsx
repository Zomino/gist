// libararies
import { Fragment } from 'react';
import { IoCaretUp, IoTrashBin } from 'react-icons/io5';
// services
import { useListEditorContext } from '../context';
import actions from '../state/actions';
// components
import ListContainer from '../../../containers/List';
import ListItem from '../../../containers/ListItem';
import GameImage from '../../../features/GameImage/GameImage';
// styles
import styles from './GameList.module.css';

interface RankButtonsProps { index: number }
interface RankButtonProps { onClick: () => void }
interface GameNameProps {
  name: string,
  index: number,
}

// helper functions
function GameName({ name, index }: GameNameProps): JSX.Element | null {
  const context = useListEditorContext();
  if (!context) return null;
  const { list } = context;

  return (
    <h3 className={styles.gameName}>
      {list.ordered
        ? <span className={styles.gameRank}>{`#${index + 1}`}</span>
        : null}
      {name}
    </h3>
  );
}

function RankButton({ onClick }: RankButtonProps): JSX.Element {
  return (
    <div className={styles.rankButton}>
      <IoCaretUp onClick={onClick} />
    </div>
  );
}

function RankButtons({ index }: RankButtonsProps): JSX.Element | null {
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
        ? <RankButton onClick={incrementRank} />
        : null}
      {index < list.games.length
        ? <RankButton onClick={decrementRank} />
        : null}
    </div>
  );
}

// main export
export default function List(): JSX.Element | null {
  const context = useListEditorContext();
  if (!context) return null;
  const { list, dispatch } = context;

  const removeGame = (appid: number): void => {
    dispatch(actions.removeGame(appid));
  };

  return (
    <ListContainer ordered={list.ordered}>
      {list.games.map((game, index) => (
        <Fragment key={game.appid}>
          <ListItem customStyles={styles.flexContainer}>
            {list.ordered ? <RankButtons index={index} /> : null}
            <GameImage appid={game.appid} hash={game.img_logo_url} />
            <GameName name={game.name} index={index} />
            <IoTrashBin
              className={styles.deleteButton}
              onClick={() => removeGame(game.appid)}
            />
          </ListItem>
        </Fragment>
      ))}
    </ListContainer>
  );
}
