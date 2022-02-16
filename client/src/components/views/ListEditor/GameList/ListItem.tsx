import { IoTrashBin } from 'react-icons/io5';
import { type Game } from 'interfaces';
import ListItemContainer from 'components/containers/ListItem';
import GameImage from 'components/features/GameImage';
import RankButtons from './RankButtons';
import GameName from './GameName';
import actions from '../state/actions';
import { useListEditorContext } from '../context';
import styles from './styles.module.css';

interface ListItemProps {
  index: number,
  game: Game,
}

export default function ListItem({ index, game }: ListItemProps): JSX.Element | null {
  const context = useListEditorContext();
  if (!context) return null;
  const { list, dispatch } = context;

  const removeGame = (appid: number): void => {
    dispatch(actions.removeGame(appid));
  };

  return (
    <ListItemContainer customStyles={styles.flexContainer}>
      {list.ordered ? <RankButtons index={index} /> : null}
      <GameImage appid={game.appid} hash={game.img_logo_url} />
      <GameName name={game.name} index={index} />
      <IoTrashBin
        className={styles.deleteButton}
        onClick={() => removeGame(game.appid)}
      />
    </ListItemContainer>
  );
}
