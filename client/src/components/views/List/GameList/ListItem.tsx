import { type Game } from 'interfaces';
import ListItemContainer from 'components/containers/ListItem';
import GameImage from 'components/features/GameImage/GameImage';
import SteamLink from './SteamLink';
import GameInfo from './GameInfo';
import styles from './GameList.module.css';

interface ListItemProps {
  game: Game,
  index: number,
  ordered: boolean,
}

export default function ListItem({ game, index, ordered }: ListItemProps): JSX.Element {
  return (
    <SteamLink appid={game.appid}>
      <ListItemContainer customStyles={styles.flexContainer}>
        <GameImage
          appid={game.appid}
          hash={game.img_logo_url}
        />
        <GameInfo
          ordered={ordered}
          gameName={game.name}
          index={index}
        />
      </ListItemContainer>
    </SteamLink>
  );
}
