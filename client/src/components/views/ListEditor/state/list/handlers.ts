import type { List, Game } from '../../../../../interfaces';

export function setList(list: List, apiList: List): List {
  return {
    ...list,
    ...apiList,
  };
}

export function incrementRank(list: List, rank: number): List {
  const newList = [...list.games];
  [newList[rank - 1], newList[rank]] = [newList[rank], newList[rank - 1]];
  return {
    ...list,
    games: newList,
  };
}

export function decrementRank(list: List, rank: number): List {
  const newList = [...list.games];
  [newList[rank + 1], newList[rank]] = [newList[rank], newList[rank + 1]];
  return {
    ...list,
    games: newList,
  };
}

export function removeGame(list: List, appid: number): List {
  const newList = [...list.games]
    .filter((game) => game.appid !== appid);
  return {
    ...list,
    games: newList,
  };
}

export function addGame(list: List, game: Game): List {
  const newGame = {
    appid: game.appid,
    name: game.name,
    img_logo_url: game.img_logo_url,
  };
  return {
    ...list,
    games: [...list.games, newGame],
  };
}

export function saveOptions(list: List, name: string, ordered: boolean): List {
  return {
    ...list,
    name,
    ordered,
  };
}
