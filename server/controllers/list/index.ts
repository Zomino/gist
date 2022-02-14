import { type Request, type Response } from 'express';
import { type Game } from '../../interfaces';
import ListModel from '../../models/List';
import { APIUserID } from '../../environment';
import steam from '../../services/steamAPI';
import { addAPIData, checkRequestBody } from './helper';

async function getLists(_: Request, res: Response): Promise<void> {
  try {
    const lists = await ListModel
      .find({ steamid: APIUserID })
      .lean();

    res
      .status(200)
      .send(lists);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

async function getListById(req: Request, res: Response): Promise<void> {
  try {
    const [list] = await ListModel
      .find({ _id: req.params.id })
      .lean();

    const appids = list.games.map((game: Game) => game.appid);

    const APIGames = await steam.getOwnedGamesById(appids);

    list.games = addAPIData(list.games, APIGames);

    res
      .status(200)
      .send(list);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

async function putList(req: Request, res: Response): Promise<void> {
  const { body } = req;
  const validRequest = checkRequestBody(body);

  if (!validRequest) {
    res.sendStatus(400);
    return;
  }

  try {
    const {
      _id,
      name,
      games,
      ordered,
    } = req.body;

    const update = {
      steamid: APIUserID,
      name,
      games,
      ordered,
    };

    if (_id) {
      const filter = { _id };
      await ListModel.findOneAndUpdate(filter, update);
      res.sendStatus(200);
    } else {
      ListModel.create(update);
      res.sendStatus(201);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

async function deleteList(req: Request, res: Response): Promise<void> {
  try {
    const filter = { _id: req.params.id };
    await ListModel.deleteOne(filter);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export default {
  getLists,
  getListById,
  putList,
  deleteList,
};
