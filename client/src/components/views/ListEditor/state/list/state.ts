// libraries
import { useReducer } from 'react';
// services
import listReducer from './reducer';
import {
  setList,
  incrementRank,
  decrementRank,
  removeGame,
  addGame,
  saveOptions,
} from './actions';
// types
import type { List, Game } from '../../../../../interfaces';
import { type Actions } from './types';

const initialState: List = {
  _id: '',
  name: '',
  games: [],
  ordered: false,
};

export default function useListReducer(): [List, Actions] {
  const [list, dispatch] = useReducer(listReducer, initialState);
  const actions = {
    setList: (newList: List) => {
      dispatch(setList(newList));
    },
    incrementRank: (rank: number) => {
      dispatch(incrementRank(rank));
    },
    decrementRank: (rank: number) => {
      dispatch(decrementRank(rank));
    },
    removeGame: (appid: number) => {
      dispatch(removeGame(appid));
    },
    addGame: (game: Game) => {
      dispatch(addGame(game));
    },
    saveOptions: (name: string, ordered: boolean) => {
      dispatch(saveOptions(name, ordered));
    },
  };

  return [list, actions];
}
