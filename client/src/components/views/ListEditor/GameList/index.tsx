import { Fragment } from 'react';
import ListContainer from 'components/containers/List';
import ListItem from './ListItem';
import { useListEditorContext } from '../context';

export default function GameList(): JSX.Element | null {
  const context = useListEditorContext();
  if (!context) return null;
  const { list } = context;

  return (
    <ListContainer ordered={list.ordered}>
      {list.games.map((game, index) => (
        <Fragment key={game.appid}>
          <ListItem
            index={index}
            game={game}
          />
        </Fragment>
      ))}
    </ListContainer>
  );
}
