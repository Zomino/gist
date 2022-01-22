import { Router } from 'express';
import game from './controllers/game';
import list from './controllers/list';

const router = Router();

router
  .get('/games', game.getGameData)
  .get('/lists', list.getLists)
  .get('/lists/:id', list.getListById)
  .put('/lists', list.putList)
  .delete('/lists/:id', list.deleteList);

export default router;
