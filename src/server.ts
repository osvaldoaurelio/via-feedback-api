import 'express-async-errors';
import 'reflect-metadata';
import './database';

import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';

import routes from './routes';
import AppError from './app/errors/AppError';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    console.log(err);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3000, () => console.log('Server is running...'));
