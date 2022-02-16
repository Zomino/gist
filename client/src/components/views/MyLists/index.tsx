import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'state/hooks';
import { fetchLists, Status } from 'state/slices/lists';
import View from 'components/containers/View';
import Spinner from 'components/features/Spinner';
import Header from './Header';
import List from './List';

export default function MyListsView(): JSX.Element {
  const lists = useAppSelector((state) => state.listsState.lists);
  const listStatus = useAppSelector((state) => state.listsState.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (listStatus === Status.idle) {
      dispatch(fetchLists());
    }
  }, [listStatus, dispatch]);

  if (listStatus === Status.loading) {
    return (
      <View>
        <Spinner />
      </View>
    );
  }

  return (
    <View>
      <Header />
      <List lists={lists} />
    </View>
  );
}
