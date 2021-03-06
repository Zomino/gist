import { type Game } from '../../interfaces';

export function sortGames(games: Game[]): Game[] {
  return games.sort((a: Game, b: Game) => {
    const textA = a.name ? a.name.toUpperCase() : '';
    const textB = b.name ? b.name.toUpperCase() : '';

    if (textA < textB) return -1;
    if (textA > textB) return 1;
    return 0;
  });
}

export function removeUnnecessaryGameData(games: Game[]): Game[] {
  return games.map((game) => ({
    appid: game.appid,
    name: game.name,
    img_logo_url: game.img_logo_url,
  }));
}

export default {
  sortGames,
  removeUnnecessaryGameData,
};
