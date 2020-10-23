import { Router } from 'express';

import FeedbacksController from '../app/controllers/feedbacksController';
import ensureAuthenticated from '../app/middlewares/ensureAuthenticated';

const feedbacksRouter = Router();
const feedbacksController = new FeedbacksController();

feedbacksRouter.use(ensureAuthenticated);

feedbacksRouter.get('/sent', feedbacksController.sent);
feedbacksRouter.get('/received', feedbacksController.received);
feedbacksRouter.get('/:id', feedbacksController.show);
feedbacksRouter.post('/', feedbacksController.create);
feedbacksRouter.put('/:id', feedbacksController.update);
feedbacksRouter.put('/:id/viewed', feedbacksController.viewed);
feedbacksRouter.delete('/:id', feedbacksController.delete);

export default feedbacksRouter;
