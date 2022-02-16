import {
  useReducer,
  useState,
  useEffect,
  useMemo,
} from 'react';
import { useParams } from 'react-router-dom';
import { type List } from 'interfaces';
import { useAppSelector, useAppDispatch } from 'state/hooks';
import { fetchLists, Status } from 'state/slices/lists';
import View from 'components/containers/View';
import Spinner from 'components/features/Spinner';
import ErrorMessage from 'components/features/ErrorMessage';
import Header from './Header';
import GameList from './GameList';
import Toolbar from './Toolbar';
import GamePicker from './GamePicker';
import reducer from './state/reducer';
import actions from './state/actions';
import { ListEditorContext as Context } from './context';

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
  const storeLists = useAppSelector((state) => state.listsState.lists);
  const singleStoreList = storeLists.find((storeList) => storeList._id === id);
  const listStatus = useAppSelector((state) => state.listsState.status);
  const fetchErrorMessage = useAppSelector((state) => state.listsState.error);
  const storeDispatch = useAppDispatch();

  useEffect(() => {
    if (listStatus === Status.idle) {
      storeDispatch(fetchLists());
    }

    if (singleStoreList) {
      dispatch(actions.setList(singleStoreList));
    }
  }, [listStatus, singleStoreList, storeDispatch]);

  const context = useMemo(() => ({
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

  if (id && !singleStoreList) {
    return (
      <View>
        <ErrorMessage customMessage="List does not exist" />
      </View>
    );
  }

  return (
    <Context.Provider value={context}>
      <View>
        <Header />
        <Toolbar />
        <GameList />
        {gamePickerOpen ? <GamePicker /> : null}
      </View>
    </Context.Provider>
  );
}
