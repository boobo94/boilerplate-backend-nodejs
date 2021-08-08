import { Router } from 'express';
import userRouter from './users';
import areaRouter from './areas';
import vehiclesRouter from './vehicles';

export default Router()
  .use('/users', userRouter)
  .use('/areas', areaRouter)
  .use('/vehicles', vehiclesRouter);
