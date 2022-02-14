import axios from 'axios';
import { APIKey, APIUserID } from '../../environment';
import { type Game } from '../../interfaces';
import { sortGames, removeUnnecessaryGameData } from './helper';

const BASE_URL = 'http://api.steampowered.com';

async function getOwnedGames(): Promise<Game[]> {
  const url = `${BASE_URL}/IPlayerService/GetOwnedGames/v0001/`;
  const params = {
    key: APIKey,
    steamid: APIUserID,
    include_appinfo: true,
  };

  const res = await axios.get(url, { params });
  const { games } = res.data.response;
  const sortedGames = sortGames(games);
  const cleanGames = removeUnnecessaryGameData(sortedGames);

  return cleanGames;
}

async function getOwnedGamesById(appids: number[]): Promise<Game[]> {
  const url = `${BASE_URL}/IPlayerService/GetOwnedGames/v0001/`;
  const params = {
    key: APIKey,
    input_json: {
      steamid: APIUserID,
      include_appinfo: true,
      appids_filter: appids,
    },
  };

  const res = await axios.get(url, { params });
  const { games } = res.data.response;
  const sortedGames = sortGames(games);
  const cleanGames = removeUnnecessaryGameData(sortedGames);

  return cleanGames;
}

export default {
  getOwnedGames,
  getOwnedGamesById,
};
