/* eslint-disable semi */

import { ReactNode } from 'react';

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

export interface Props {
  children: ReactNode
}
