/* eslint-disable jsx-a11y/no-static-element-interactions */

// libraries
import { useState, useEffect, Fragment } from 'react';
import { IoCheckmark } from 'react-icons/io5';
// services
import apiService from '../../../../../services/ServerAPI';
import { useListEditorContext } from '../../context';
import actions from '../../state/actions';
// components
import ListContainer from '../../../../containers/List/List';
import ListItemContainer from '../../../../containers/ListItem/ListItem';
import GameImage from '../../../../features/GameImage/GameImage';
// types
import { type Game, type Props } from '../../../../../interfaces';
// styles
import styles from './OwnedGameList.module.css';

interface ListItemProps extends Props {
  game: Game,
  added: boolean,
}

// helper functions
function ListItemClickableWrapper({
  game, added, children,
}: ListItemProps): JSX.Element | null {
  const context = useListEditorContext();
  if (!context) return null;
  const { dispatch } = context;

  const addGame = (): void => {
    dispatch(actions.addGame(game));
  };

  if (added) {
    return (
      <div className={styles.allowed}>
        {children}
      </div>
    );
  }

  return (
    <div
      className={styles.notAllowed}
      onClick={addGame}
      onKeyDown={addGame}
    >
      {children}
    </div>
  );
}

function ListItem({ game, added }: ListItemProps): JSX.Element {
  return (
    <ListItemClickableWrapper game={game} added={added}>
      <ListItemContainer customStyles={styles.flexContainer}>
        <GameImage appid={game.appid} hash={game.img_logo_url} />
        <h4 className={styles.gameName}>{game.name}</h4>
        {added ? <IoCheckmark className={styles.added} /> : null}
      </ListItemContainer>
    </ListItemClickableWrapper>
  );
}

function Container({ children }: Props): JSX.Element {
  return (
    <div className={styles.containerOuter}>
      <div className={styles.containerInner}>
        { children }
      </div>
    </div>
  );
}

export default function OwnedGameList(): JSX.Element | null {
  const [ownedGames, setOwnedGames] = useState<Game[]>([]);

  useEffect(() => {
    (async () => {
      const apiGames = await apiService.getOwnedGames();
      setOwnedGames(apiGames);
    })();
  }, []);

  const context = useListEditorContext();
  if (!context) return null;
  const { list } = context;

  return (
    <Container>
      <ListContainer ordered>
        {ownedGames.map((game) => {
          const match = list.games
            .find((listGame) => listGame.appid === game.appid);

          return (
            <Fragment key={game.appid}>
              <ListItem game={game} added={!!match} />
            </Fragment>
          );
        })}
      </ListContainer>
    </Container>
  );
}
