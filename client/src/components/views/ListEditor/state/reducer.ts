import { type List } from 'interfaces';
import { ActionType, type Action } from './types';
import {
  setList,
  incrementRank,
  decrementRank,
  removeGame,
  addGame,
  saveOptions,
} from './handlers';

export default function reducer(list: List, action: Action): List {
  switch (action.type) {
    case ActionType.setList: {
      const { storeList } = action.payload;
      if (storeList) return setList(list, storeList);
      break;
    }
    case ActionType.incrementRank: {
      const { rank } = action.payload;
      if (rank) return incrementRank(list, rank);
      break;
    }
    case ActionType.decrementRank: {
      const { rank } = action.payload;
      if (typeof rank === 'number') return decrementRank(list, rank);
      break;
    }
    case ActionType.removeGame: {
      const { appid } = action.payload;
      if (appid) return removeGame(list, appid);
      break;
    }
    case ActionType.addGame: {
      const { game } = action.payload;
      if (game) return addGame(list, game);
      break;
    }
    case ActionType.saveOptions: {
      const { name, ordered } = action.payload;
      if (name && (ordered !== undefined)) {
        return saveOptions(list, name, ordered);
      }
      break;
    }
    default:
  }
  return list;
}
