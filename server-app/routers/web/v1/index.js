import { Router } from 'express';
import userRouter from './users';

export default Router()
  .use('/users', userRouter);
