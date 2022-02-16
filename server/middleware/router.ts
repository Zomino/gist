import { Router } from 'express';
import game from '../controllers/game';
import list from '../controllers/list';

const router = Router();

router.get('/games', game.getGameData);
router.get('/lists', list.getLists);
// router.get('/lists/:id', list.getListByID);
router.put('/lists', list.putList);
router.delete('/lists/:id', list.deleteList);

export default router;
