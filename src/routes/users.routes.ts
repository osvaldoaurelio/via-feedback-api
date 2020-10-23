import { Router } from 'express';

import UsersController from '../app/controllers/usersController';
import ensureAuthenticated from '../app/middlewares/ensureAuthenticated';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get('/', ensureAuthenticated, usersController.index);
usersRouter.get('/me', ensureAuthenticated, usersController.me);
usersRouter.post('/', usersController.create);

export default usersRouter;
