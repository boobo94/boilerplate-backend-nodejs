import { body, param } from 'express-validator';
import checkValidation from '../../../middlewares/check-validation';

export const vehicleIdParam = [
  param('vehicleId')
    .not().isEmpty().withMessage('is required')
    .isString()
    .withMessage('should be string'),

  checkValidation,
];

export const create = [

  body(['name', 'notes', 'notes2'])
    .optional()
    .isString()
    .withMessage('should be string'),

  body(['stampila'])
    .not().isEmpty().withMessage('is required')
    .isString()
    .withMessage('should be string'),

  body(['make', 'model', 'reg_no'])
    .not().isEmpty().withMessage('is required')
    .isString()
    .withMessage('should be string')
    .isLength({
      max: 50,
    })
    .withMessage('max length is 50 chars'),

  body('analogic_model')
    .optional()
    .isString()
    .withMessage('should be string')
    .isLength({
      max: 50,
    })
    .withMessage('max length is 50 chars'),

  body(['tank_fuel_vol', 'km', 'hours', 'min_revolutions', 'max_revolutions', 'idle_revolutions'])
    .not().isEmpty().withMessage('is required')
    .isNumeric()
    .withMessage('should be number'),

  body(['timestamp', 'consum', 'start_time'])
    .optional()
    .isNumeric()
    .withMessage('should be number'),

  body('culoare_marker')
    .optional()
    .isString()
    .withMessage('should be string')
    .isLength({
      max: 10,
    })
    .withMessage('max length is 10 chars'),

  checkValidation,
];

export const update = [

  body(['name', 'notes', 'notes2', 'stampila'])
    .optional()
    .isString()
    .withMessage('should be string'),

  body(['make', 'model', 'reg_no', 'analogic_model'])
    .optional()
    .isString()
    .withMessage('should be string')
    .isLength({
      max: 50,
    })
    .withMessage('max length is 50 chars'),

  body(['tank_fuel_vol', 'km', 'hours', 'min_revolutions', 'max_revolutions', 'idle_revolutions', 'timestamp', 'consum', 'start_time'])
    .optional()
    .isNumeric()
    .withMessage('should be number'),

  body('culoare_marker')
    .optional()
    .isString()
    .withMessage('should be string')
    .isLength({
      max: 10,
    })
    .withMessage('max length is 10 chars'),

  checkValidation,
];
