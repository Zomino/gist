import type Game from '../../interfaces/Game';
import type List from '../../interfaces';

export function addApiData(games: Game[], apiGames: Game[]): Game[] {
  return games.map((game: Game) => {
    const apiData = apiGames
      .find((apiGame: Game) => apiGame.appid === game.appid);

    return {
      ...game,
      name: apiData!.name,
      img_logo_url: apiData!.img_logo_url,
    };
  });
}

export function validBody(body: List): boolean {
  if (
    !body.name
    || !body.games
    || !body.games.length
    || !Object.prototype.hasOwnProperty.call(body, 'ordered')
  ) return false;

  return true;
}
