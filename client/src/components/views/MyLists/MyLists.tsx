// libraries
import { useState, useEffect } from 'react';
// services
import apiService from '../../../apiService';
// components
import View from '../../containers/View/View';
import Spinner from '../../features/Spinner/Spinner';
import Header from './Header/Header';
import ListList from './ListList/ListList';
// types
import { type List } from '../../../interfaces';

export default function MyListsView(): JSX.Element {
  const [lists, setLists] = useState<List[]>();

  useEffect(() => {
    (async () => {
      const fetchedLists = await apiService.getLists();
      setLists(fetchedLists);
    })();
  }, []);

  if (!lists) {
    return (
      <View>
        <Spinner />
      </View>
    );
  }

  return (
    <View>
      <Header />
      <ListList lists={lists} />
    </View>
  );
}
