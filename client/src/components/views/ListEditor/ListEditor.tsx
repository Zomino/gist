/* eslint-disable no-underscore-dangle */

// libraries
import {
  useReducer,
  useState,
  useEffect,
  useMemo,
} from 'react';
import { useParams } from 'react-router-dom';
// services
import APIService from '../../../services/serverAPI';
import reducer from './state/reducer';
import actions from './state/actions';
import { ListEditorContext as Context } from './context';
// components
import View from '../../containers/View';
import Spinner from '../../features/Spinner';
import Header from './Header';
import Toolbar from './Toolbar/Toolbar';
import GameList from './GameList/GameList';
import GamePicker from './GamePicker/GamePicker';
// types
import { type List } from '../../../interfaces';

export default function ListEditor(): JSX.Element {
  const initialState: List = {
    _id: '',
    name: '',
    games: [],
    ordered: false,
  };

  const [list, dispatch] = useReducer(reducer, initialState);
  const [gamePickerOpen, setGamePickerOpen] = useState(false);
  const [optionFormOpen, setOptionFormOpen] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      (async () => {
        const fetchedList = await APIService.getListByID(id);
        dispatch(actions.setList(fetchedList));
      })();
    }
  }, [id]);

  const value = useMemo(() => ({
    list,
    gamePickerOpen,
    optionFormOpen,
    dispatch,
    setGamePickerOpen,
    setOptionFormOpen,
  }), [
    list,
    gamePickerOpen,
    optionFormOpen,
    setGamePickerOpen,
    setOptionFormOpen,
  ]);

  if (id && !list._id) {
    return (
      <View>
        <Spinner />
      </View>
    );
  }

  return (
    <Context.Provider value={value}>
      <View>
        <Header />
        <Toolbar />
        <GameList />
        {gamePickerOpen ? <GamePicker /> : null}
      </View>
    </Context.Provider>
  );
}
