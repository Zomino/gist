import axios from 'axios';
import { type Game, type List } from 'interfaces';
import { serverUrl } from 'environment';

export async function getLists(): Promise<List[]> {
  const res = await axios.get(`${serverUrl}/lists`);
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

export default {
  getLists,
  getOwnedGames,
  putList,
  deleteList,
};
