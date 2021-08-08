import { Router } from 'express';
import userRouter from './users';
import areaRouter from './areas';
import vehiclesRouter from './vehicles';
import divisionsRouter from './divisions';

export default Router()
  .use('/users', userRouter)
  .use('/areas', areaRouter)
  .use('/vehicles', vehiclesRouter)
  .use('/divisions', divisionsRouter);
