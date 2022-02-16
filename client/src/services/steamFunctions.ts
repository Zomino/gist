export function constructImageURL(appid: number, hash: string): string {
  return `http://media.steampowered.com/steamcommunity/public/images/apps/${appid}/${hash}.jpg`;
}

export function constructStoreURL(appid: number): string {
  return `https://store.steampowered.com/agecheck/app/${appid}/`;
}

export default {
  constructImageURL,
  constructStoreURL,
};
