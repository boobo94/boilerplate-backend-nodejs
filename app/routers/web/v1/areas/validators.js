import { body, param, query } from 'express-validator';
import checkValidation from '../../../middlewares/check-validation';

export const areaIdParam = [
  param('areaId')
    .not().isEmpty().withMessage('is required')
    .isString()
    .withMessage('should be string'),

  checkValidation,
];

export const create = [
  body('points')
    .not().isEmpty().withMessage('is required')
    .isArray()
    .withMessage('should be array'),
  body('points.*')
    .not().isEmpty().withMessage('is required')
    .isArray()
    .withMessage('should be array'),
  body('points.*.*')
    .not().isEmpty().withMessage('is required')
    .isNumeric()
    .withMessage('should be number'),

  body('rectangle')
    .optional()
    .isArray()
    .withMessage('should be array'),

  body('rectangle.*')
    .optional()
    .isNumeric()
    .withMessage('should be number'),

  body('name')
    .not().isEmpty().withMessage('is required')
    .isString()
    .withMessage('should be string'),

  body('name_public')
    .not().isEmpty().withMessage('is required')
    .isString()
    .withMessage('should be string'),

  body('surface')
    .not().isEmpty().withMessage('is required')
    .isNumeric()
    .withMessage('should be number'),

  body('prefferedMu')
    .not().isEmpty().withMessage('is required')
    .isString()
    .withMessage('should be string')
    .isLength({
      max: 3,
    })
    .withMessage('max length is 3 chars'),

  body('color')
    .not().isEmpty().withMessage('is required')
    .isString()
    .withMessage('should be string')
    .isLength({
      max: 10,
    })
    .withMessage('max length is 10 chars'),

  body('deleted')
    .not().isEmpty().withMessage('is required')
    .isInt()
    .withMessage('should be int')
    .toInt(),

  body('is_remote')
    .not().isEmpty().withMessage('is required')
    .isInt()
    .withMessage('should be int')
    .toInt(),

  checkValidation,
];

export const update = [
  body('points')
    .optional()
    .isArray()
    .withMessage('should be array'),
  body('points.*')
    .optional()
    .isArray()
    .withMessage('should be array'),
  body('points.*.*')
    .optional()
    .isNumeric()
    .withMessage('should be number'),

  body('rectangle')
    .optional()
    .isArray()
    .withMessage('should be array'),

  body('rectangle.*')
    .optional()
    .isNumeric()
    .withMessage('should be number'),

  body('name')
    .optional()
    .isString()
    .withMessage('should be string'),

  body('name_public')
    .optional()
    .isString()
    .withMessage('should be string'),

  body('surface')
    .optional()
    .isNumeric()
    .withMessage('should be number'),

  body('prefferedMu')
    .optional()
    .isString()
    .withMessage('should be string')
    .isLength({
      max: 3,
    })
    .withMessage('max length is 3 chars'),

  body('color')
    .optional()
    .isString()
    .withMessage('should be string')
    .isLength({
      max: 10,
    })
    .withMessage('max length is 10 chars'),

  body('deleted')
    .optional()
    .isInt()
    .withMessage('should be int')
    .toInt(),

  body('is_remote')
    .optional()
    .isInt()
    .withMessage('should be int')
    .toInt(),

  checkValidation,
];

export const getReports = [

  query(['start_date', 'end_date'])
    .optional()
    .isString()
    .withMessage('should be string'),

  checkValidation,
];
