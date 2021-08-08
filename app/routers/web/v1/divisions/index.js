import { Router } from 'express';
import * as validators from './validators';
import checkAuthorization from '../../../middlewares/check-authorization';
import getOne from './get-one';
import getAll from './get-all';

export default Router()

  .get('/',
    checkAuthorization,
    getAll)

  .get('/:divisionId',
    validators.divisionIdParam,
    checkAuthorization,
    getOne);
