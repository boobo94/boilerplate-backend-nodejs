import { body } from 'express-validator';
import checkValidation from '../../../middlewares/check-validation';

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

export const updatePassword = [
  body('password')
    .not().isEmpty().withMessage('is required')
    .isString()
    .withMessage('should be string'),
  checkValidation,
];
