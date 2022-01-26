import type { List, Game } from '../../../../../interfaces';

export enum ActionType {
  setList,
  incrementRank,
  decrementRank,
  removeGame,
  addGame,
  saveOptions,
}

export interface Payload {
  fetchedList?: List,
  rank?: number,
  appid?: number,
  game?: Game,
  name?: string,
  ordered?: boolean,
}

export interface Action {
  type: ActionType,
  payload: Payload,
}

export interface Actions {
  setList: (newList: List) => void;
  incrementRank: (rank: number) => void;
  decrementRank: (rank: number) => void;
  removeGame: (appid: number) => void;
  addGame: (game: Game) => void;
  saveOptions: (name: string, ordered: boolean) => void;
}
