import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'state/hooks';
import View from 'components/containers/View';
import Spinner from 'components/features/Spinner';
import Header from './Header';
import List from './List';
import { fetchLists, Status } from './slice';

export default function MyListsView(): JSX.Element {
  const lists = useAppSelector((state) => state.myLists.lists);
  const listStatus = useAppSelector((state) => state.myLists.status);
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
