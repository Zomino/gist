// libraries
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// services
import apiService from '../../../services/ServerAPI';
// components
import View from '../../containers/View';
import Spinner from '../../features/Spinner';
import Header from './Header/Header';
import GameList from './GameList/GameList';
// types
import { type List } from '../../../interfaces';

export default function ListView(): JSX.Element {
  const { id } = useParams();
  const [list, setList] = useState<List>();

  useEffect(() => {
    (async () => {
      if (id) {
        const fetchedList = await apiService.getListByID(id);
        setList(fetchedList);
      }
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
