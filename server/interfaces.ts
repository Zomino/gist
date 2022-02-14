/* eslint-disable semi */
export interface Game {
  appid: number,
  name?: string,
  img_logo_url?: string,
}

export interface List {
  _id?: string,
  name: string,
  steamid: number,
  games: Game[],
  ordered: boolean
}
