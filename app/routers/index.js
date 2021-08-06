import { Router } from 'express';
import webRouter from './web';

export default Router()
  .get('/', (req, res) => res.end('Server is up and running...'))
  .use('/web', webRouter);
