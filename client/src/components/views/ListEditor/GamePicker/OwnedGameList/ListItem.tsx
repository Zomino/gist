import { IoCheckmark } from 'react-icons/io5';
import { type Game } from 'interfaces';
import { type Props } from 'components/interfaces';
import ListItemContainer from 'components/containers/ListItem';
import GameImage from 'components/features/GameImage';
import Heading4 from 'components/containers/Heading4';
import ClickableWrapper from './ClickableWrapper';
import styles from './styles.module.css';

interface ListItemProps extends Props {
  game: Game,
  added: boolean,
}

export default function ListItem({ game, added }: ListItemProps): JSX.Element {
  return (
    <ClickableWrapper game={game} added={added}>
      <ListItemContainer customStyles={styles.flexContainer}>
        <GameImage appid={game.appid} hash={game.img_logo_url} />
        <Heading4 customStyles={styles.gameName}>{game.name}</Heading4>
        {added ? <IoCheckmark className={styles.added} /> : null}
      </ListItemContainer>
    </ClickableWrapper>
  );
}
