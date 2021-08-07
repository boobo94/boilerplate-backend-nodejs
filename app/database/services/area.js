import { Op } from 'sequelize';
import { area } from '../models';

export async function findOne(id, companyId) {
  return area.findOne({
    where: {
      id: {
        [Op.eq]: id,
      },
      company_id: {
        [Op.eq]: companyId,
      },
    },
  });
}

/**
 * Find all areas of company
 * @param {number} companyId
 * @returns
 */
export async function findAll(companyId) {
  return area.findAll({
    where: {
      company_id: {
        [Op.eq]: companyId,
      },
    },
  });
}

export async function create(object, transaction = null) {
  return area.create(object, {
    transaction,
  });
}

export async function update(object, id, companyId, transaction = null) {
  return area.update(object, {
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
 * @param {number} companyId
 * @param {function} transaction
 * @returns
 */
export async function remove(id, companyId, transaction = null) {
  return area.destroy({
    where: {
      id: {
        [Op.eq]: id,
      },
      company_id: {
        [Op.eq]: companyId,
      },
    },
    transaction,
  });
}
