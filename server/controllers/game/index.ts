import { type Request, type Response } from 'express';
import steam from '../../services/steamAPIService';

async function getGameData(_: Request, res: Response): Promise<void> {
  try {
    const games = await steam.getOwnedGames();

    res
      .status(200)
      .send(games);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export default { getGameData };
