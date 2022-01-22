import axios from 'axios';
import { apiKey, apiUserId } from '../environment';
import { sortGames, cleanGames } from './helper';
import type Game from '../interfaces/Game';

const BASE_URL = 'http://api.steampowered.com';

async function getOwnedGames(): Promise<Game[]> {
  const url = `${BASE_URL}/IPlayerService/GetOwnedGames/v0001/`;
  const params = {
    key: apiKey,
    steamid: apiUserId,
    include_appinfo: true,
  };

  const res = await axios.get(url, { params });
  let { games } = res.data.response;

  games = sortGames(games);
  games = cleanGames(games);

  return games;
}

async function getOwnedGamesById(appids: number[]): Promise<Game[]> {
  const url = `${BASE_URL}/IPlayerService/GetOwnedGames/v0001/`;
  const params = {
    key: apiKey,
    input_json: {
      steamid: apiUserId,
      include_appinfo: true,
      appids_filter: appids,
    },
  };

  const res = await axios.get(url, { params });
  let { games } = res.data.response;

  games = sortGames(games);
  games = cleanGames(games);

  return games;
}

export default {
  getOwnedGames,
  getOwnedGamesById,
};
