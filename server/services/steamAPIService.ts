import axios from 'axios';
import { apiKey, apiUserId } from '../environment';
import { type Game } from '../interfaces';

const BASE_URL = 'http://api.steampowered.com';

function sortGames(games: Game[]): Game[] {
  return games.sort((a: Game, b: Game) => {
    const textA = a.name ? a.name.toUpperCase() : '';
    const textB = b.name ? b.name.toUpperCase() : '';

    if (textA < textB) return -1;
    if (textA > textB) return 1;
    return 0;
  });
}

function removeUnnecessaryGameData(games: Game[]): Game[] {
  return games.map((game) => ({
    appid: game.appid,
    name: game.name,
    img_logo_url: game.img_logo_url,
  }));
}

async function getOwnedGames(): Promise<Game[]> {
  const url = `${BASE_URL}/IPlayerService/GetOwnedGames/v0001/`;
  const params = {
    key: apiKey,
    steamid: apiUserId,
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
    key: apiKey,
    input_json: {
      steamid: apiUserId,
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
