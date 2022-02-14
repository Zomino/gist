import axios from 'axios';
import { serverUrl } from '../environment';
import type { Game, List } from '../interfaces';

export async function getLists(): Promise<List[]> {
  const res = await axios.get(`${serverUrl}/lists`);
  return res.data;
}

export async function getListByID(id: string): Promise<List> {
  const res = await axios.get(`${serverUrl}/lists/${id}`);
  return res.data;
}

export async function putList(payload: List): Promise<void> {
  await axios.put(`${serverUrl}/lists`, payload);
}

export async function deleteList(id: string): Promise<void> {
  await axios.delete(`${serverUrl}/lists/${id}`);
}

export async function getOwnedGames(): Promise<Game[]> {
  const res = await axios.get(`${serverUrl}/games`);
  return res.data;
}

export function constructImageURL(appid: number, hash: string): string {
  return `http://media.steampowered.com/steamcommunity/public/images/apps/${appid}/${hash}.jpg`;
}

export function constructStoreURL(appid: number): string {
  return `https://store.steampowered.com/agecheck/app/${appid}/`;
}

const apiService = {
  getLists,
  getListByID,
  getOwnedGames,
  putList,
  deleteList,
  constructImageURL,
  constructStoreURL,
};

export default apiService;