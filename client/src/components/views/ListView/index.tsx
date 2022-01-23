import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import APIService from '../../../services/APIService';
import View from '../../containers/View';
import Spinner from '../../features/Spinner';
import Header from './Header';
import GameList from './GameList';
import type List from '../../../interfaces/List';

export default function ListView(): JSX.Element {
  const { id } = useParams();
  const [list, setList] = useState<List>();

  useEffect(() => {
    (async () => {
      if (!id) return;
      const fetchedList = await APIService.getListById(id);
      setList(fetchedList);
    })();
  }, [id]);

  if (!list) {
    return (
      <View>
        <Spinner />
      </View>
    );
  }

  return (
    <View>
      <Header list={list} />
      <GameList list={list} />
    </View>
  );
}
