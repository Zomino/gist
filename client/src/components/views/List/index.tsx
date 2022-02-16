import { useParams } from 'react-router-dom';
import { useAppSelector } from 'state/hooks';
import View from 'components/containers/View';
import ErrorMessage from 'components/features/ErrorMessage';
import Header from './Header';
import GameList from './GameList';

export default function ListView(): JSX.Element {
  const { id } = useParams();
  const lists = useAppSelector((state) => state.listsState.lists);
  const singleList = lists.find((list) => list._id === id);

  if (!singleList) {
    return (
      <View>
        <ErrorMessage customMessage="List does not exist" />
      </View>
    );
  }

  return (
    <View>
      <Header
        listName={singleList.name}
        listID={singleList._id}
      />
      <GameList list={singleList} />
    </View>
  );
}
