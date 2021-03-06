import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import { resolve } from 'path';
import cors from 'cors';

import routes from './routes';
import './database/connection';
import AppError from './config/AppError';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }
  console.error(err);
  return response.status(500).json({
    status: 'error',
    message: 'International server error',
  });
});
app.listen(3333, () => {
  console.log('Server started!');
});
