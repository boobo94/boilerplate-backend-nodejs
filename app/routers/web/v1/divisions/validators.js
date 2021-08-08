import { param } from 'express-validator';
import checkValidation from '../../../middlewares/check-validation';

// eslint-disable-next-line import/prefer-default-export
export const divisionIdParam = [
  param('divisionId')
    .not().isEmpty().withMessage('is required')
    .isString()
    .withMessage('should be string'),

  checkValidation,
];
