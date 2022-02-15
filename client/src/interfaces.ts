export interface Game {
  appid: number,
  name: string,
  img_logo_url: string,
}

export interface List {
  _id?: string,
  steamid?: number,
  name: string,
  games: Game[],
  ordered: boolean,
}
