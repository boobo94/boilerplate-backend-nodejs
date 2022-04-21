import { Op } from 'sequelize';
import { company } from '../models';

export async function findOne(id) {
  return company.findOne({
    where: {
      id: {
        [Op.eq]: id,
      },
    },
  });
}

/**
 * Find all areas of company
 * @param {number} companyId
 * @returns
 */
export async function findAll(id) {
  return company.findAll({
    where: {
      id: {
        [Op.eq]: id,
      },
    },
  });
}

export async function create(object, transaction = null) {
  return company.create(object, {
    transaction,
  });
}

export async function update(object, id, transaction = null) {
  return company.update(object, {
    where: {
      id: {
        [Op.eq]: id,
      },
    },
    transaction,
  });
}

/**
 * Remove the area of company
 * @param {number} id
 * @param {function} transaction
 * @returns
 */
export async function remove(id, transaction = null) {
  return company.destroy({
    where: {
      id: {
        [Op.eq]: id,
      },
    },
    transaction,
  });
}
