import { Router } from 'express';
import * as validators from './validators';
import checkAuthorization from '../../../middlewares/check-authorization';
import create from './create';
import getOne from './get-one';
import getAll from './get-all';
import deleteOne from './delete';
import update from './update';
import reports from './reports';

export default Router()

  .post('/',
    validators.create,
    checkAuthorization,
    create)

  .put('/:areaId',
    validators.areaIdParam,
    validators.update,
    checkAuthorization,
    update)

  .get('/',
    checkAuthorization,
    getAll)

  .get('/reports',
    checkAuthorization,
    validators.getReports,
    reports)

  .get('/:areaId',
    validators.areaIdParam,
    checkAuthorization,
    getOne)

  .delete('/:areaId',
    validators.areaIdParam,
    checkAuthorization,
    deleteOne);
