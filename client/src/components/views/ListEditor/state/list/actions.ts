import type { List, Game } from '../../../../../interfaces';
import { ActionType, type Action } from './types';

export function setList(fetchedList: List): Action {
  return {
    type: ActionType.setList,
    payload: { fetchedList },
  };
}

export function incrementRank(rank: number): Action {
  return {
    type: ActionType.incrementRank,
    payload: { rank },
  };
}

export function decrementRank(rank: number): Action {
  return {
    type: ActionType.decrementRank,
    payload: { rank },
  };
}

export function removeGame(appid: number): Action {
  return {
    type: ActionType.removeGame,
    payload: { appid },
  };
}

export function addGame(game: Game): Action {
  return {
    type: ActionType.addGame,
    payload: { game },
  };
}

export function saveOptions(name: string, ordered: boolean): Action {
  return {
    type: ActionType.saveOptions,
    payload: { name, ordered },
  };
}
