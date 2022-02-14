import { type Game, type List } from '../../interfaces';

export function addAPIData(games: Game[], APIGames: Game[]): Game[] {
  return games.map((game: Game) => {
    const APIData = APIGames.find((APIGame: Game) => APIGame.appid === game.appid);

    return {
      ...game,
      name: APIData?.name,
      img_logo_url: APIData?.img_logo_url,
    };
  });
}

export function checkRequestBody(body: List): boolean {
  if (
    !body.name
    || !body.games
    || !body.games.length
    || !Object.prototype.hasOwnProperty.call(body, 'ordered')
  ) {
    return false;
  }

  return true;
}

export default {
  addAPIData,
  checkRequestBody,
};
