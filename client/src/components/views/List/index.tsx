import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'state/hooks';
import { Status, fetchLists } from 'state/slices/lists';
import View from 'components/containers/View';
import Spinner from 'components/features/Spinner';
import ErrorMessage from 'components/features/ErrorMessage';
import Header from './Header';
import GameList from './GameList';

export default function ListView(): JSX.Element {
  const { id } = useParams();
  const lists = useAppSelector((state) => state.listsState.lists);
  const singleList = lists.find((list) => list._id === id);
  const listStatus = useAppSelector((state) => state.listsState.status);
  const fetchErrorMessage = useAppSelector((state) => state.listsState.error);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (listStatus === Status.idle) {
      dispatch(fetchLists());
    }
  }, [dispatch, listStatus]);

  if (listStatus === Status.loading) {
    return (
      <View>
        <Spinner />
      </View>
    );
  }

  if (listStatus === Status.failed && fetchErrorMessage) {
    return (
      <View>
        <ErrorMessage customMessage={fetchErrorMessage} />
      </View>
    );
  }

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
