import { Router } from 'express';
import userRouter from './users';
import areaRouter from './areas';

export default Router()
  .use('/users', userRouter)
  .use('/areas', areaRouter);
