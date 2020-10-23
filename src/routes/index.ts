import { Router } from 'express';
import feedbacksRouter from './feedbacks.routes';
import sessionsRouter from './sessions.routes';
import usersRouter from './users.routes';

const router = Router();

router.use('/feedbacks', feedbacksRouter);
router.use('/sessions', sessionsRouter);
router.use('/users', usersRouter);

export default router;
