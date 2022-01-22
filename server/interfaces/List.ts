/* eslint-disable semi */
export default interface List {
  _id?: string,
  name: string,
  steamid: number,
  games: {
    _id?: string,
    appid: number,
  }[],
  ordered: boolean
}
