import { Router } from 'express';
import * as validators from './validators';
import login from './login';

export default Router()

  .post('/login',
    validators.login,
    login);
