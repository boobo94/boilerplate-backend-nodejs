import { Router } from 'express';
import * as validators from './validators';
import checkAuthorization from '../../../middlewares/check-authorization';
import getOne from './get-one';
import getAll from './get-all';
import update from './update';

export default Router()

  .put('/:vehicleId',
    validators.vehicleIdParam,
    validators.update,
    checkAuthorization,
    update)

  .get('/',
    checkAuthorization,
    getAll)

  .get('/:vehicleId',
    validators.vehicleIdParam,
    checkAuthorization,
    getOne);
