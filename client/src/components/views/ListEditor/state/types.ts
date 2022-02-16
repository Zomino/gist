import { type List, type Game } from 'interfaces';

export enum ActionType {
  setList,
  incrementRank,
  decrementRank,
  removeGame,
  addGame,
  saveOptions,
}

export interface Payload {
  storeList?: List,
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
  setList: (fetchedList: List) => Action,
  incrementRank: (rank: number) => Action,
  decrementRank: (rank: number) => Action,
  removeGame: (appid: number) => Action,
  addGame: (game: Game) => Action,
  saveOptions: (name: string, ordered: boolean) => Action,
}
