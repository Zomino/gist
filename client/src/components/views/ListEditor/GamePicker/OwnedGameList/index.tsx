import { useState, useEffect, Fragment } from 'react';
import { type Game } from 'interfaces';
import serverAPI from 'services/serverAPI';
import ListContainer from 'components/containers/List';
import Spinner from 'components/features/Spinner';
import Container from './Container';
import ListItem from './ListItem';
import { useListEditorContext } from '../../context';

export default function OwnedGameList(): JSX.Element | null {
  const [ownedGames, setOwnedGames] = useState<Game[]>([]);

  useEffect(() => {
    (async () => {
      const apiGames = await serverAPI.getOwnedGames();
      setOwnedGames(apiGames);
    })();
  }, []);

  const context = useListEditorContext();
  if (!context) return null;
  const { list } = context;

  if (!ownedGames.length) {
    return (
      <Container>
        <Spinner />
      </Container>
    );
  }

  return (
    <Container>
      <ListContainer ordered>
        {ownedGames.map((game) => {
          const match = list.games.find((listGame) => listGame.appid === game.appid);

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
