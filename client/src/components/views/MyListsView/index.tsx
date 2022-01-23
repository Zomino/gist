import React, { useState, useEffect } from 'react';
import APIService from '../../../services/APIService';
import View from '../../containers/View';
import Spinner from '../../features/Spinner';
import Header from './Header';
import MyLists from './MyLists';
import type List from '../../../interfaces/List';

export default function MyListsView(): JSX.Element {
  const [lists, setLists] = useState<List[]>();

  useEffect(() => {
    (async () => {
      const fetchedLists = await APIService.getLists();
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
      <MyLists lists={lists} />
    </View>
  );
}
