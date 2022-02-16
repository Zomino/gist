import { type Game, type List } from '../../interfaces';

export function getAllAppIDs(lists: List[]): number[] {
  const appids: number[] = [];

  lists.forEach((list) => {
    list.games.forEach((game) => {
      if (!appids.includes(game.appid)) {
        appids.push(game.appid);
      }
    });
  });

  return appids;
}

export function addAPIData(lists: List[], APIGames: Game[]): void {
  lists.forEach((list) => {
    list.games = list.games.map((game: Game) => {
      const APIData = APIGames.find((APIGame: Game) => APIGame.appid === game.appid);

      return {
        ...game,
        name: APIData?.name,
        img_logo_url: APIData?.img_logo_url,
      };
    });
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
