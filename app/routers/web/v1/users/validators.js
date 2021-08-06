import { body } from 'express-validator';
import checkValidation from '../../../middlewares/check-validation';

// eslint-disable-next-line import/prefer-default-export
export const login = [
  body('username')
    .not().isEmpty().withMessage('is required')
    .isString()
    .withMessage('should be string'),

  body('password')
    .not().isEmpty().withMessage('is required')
    .isString()
    .withMessage('should be string'),
  checkValidation,
];
