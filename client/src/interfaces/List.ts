import type Game from './Game';

/* eslint-disable semi */
export default interface List {
  _id?: number,
  name: string,
  steamid: number,
  games: Game[],
  ordered: boolean,
}
