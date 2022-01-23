import axios from 'axios';
import { serverUrl } from './environment';

interface Game {
  appid: number,
  name: string,
  img_logo_url: string,
}

interface List {
  id?: number,
  name: string,
  steamid: number,
  games: Game[],
  ordered: boolean,
}

export async function getLists(): Promise<List[]> {
  const res = await axios.get(`${serverUrl}/lists`);
  return res.data;
}

export async function getListById(id: number): Promise<List> {
  const res = await axios.get(`${serverUrl}/lists/${id}`);
  return res.data;
}

export async function putList(payload: List): Promise<void> {
  await axios.put(`${serverUrl}/lists`, payload);
}

export async function deleteList(id: number): Promise<void> {
  await axios.delete(`${serverUrl}/lists/${id}`);
}

export async function getOwnedGames(): Promise<Game[]> {
  const res = await axios.get(`${serverUrl}/games`);
  return res.data;
}

export function constructImageURL(appid: number, hash: number): string {
  return `http://media.steampowered.com/
    steamcommunity/public/images/apps/${appid}/${hash}.jpg`;
}

export function constructStoreURL(appid: number): string {
  return `https://store.steampowered.com/agecheck/app/${appid}/`;
}

const APIService = {
  getLists,
  getListById,
  getOwnedGames,
  putList,
  deleteList,
  constructImageURL,
  constructStoreURL,
};

export default APIService;
