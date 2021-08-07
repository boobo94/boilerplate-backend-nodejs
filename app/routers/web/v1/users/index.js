import { Router } from 'express';
import login from './login';
import * as validators from './validators';
import checkAuthorization from '../../../middlewares/check-authorization';
import updatePassword from './update-password';

export default Router()

  .post('/login',
    validators.login,
    login)

  .put('/',
    validators.updatePassword,
    checkAuthorization,
    updatePassword);
