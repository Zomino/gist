import { Fragment } from 'react';
import { type List } from 'interfaces';
import ListContainer from 'components/containers/List';
import ListItem from './ListItem';

interface GameListProps { list: List }

export default function GameList({ list }: GameListProps): JSX.Element {
  return (
    <ListContainer ordered={!!list.ordered}>
      {list.games.map((game, index) => (
        <Fragment key={game.appid}>
          <ListItem
            game={game}
            index={index}
            ordered={list.ordered}
          />
        </Fragment>
      ))}
    </ListContainer>
  );
}
