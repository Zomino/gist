/* eslint-disable semi */
export interface List {
  _id?: string,
  name: string,
  steamid: number,
  games: {
    _id?: string,
    appid: number,
  }[],
  ordered: boolean
}

export interface Game {
  appid: number,
  name?: string,
  img_logo_url?: string,
}
