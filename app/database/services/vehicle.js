import { Op } from 'sequelize';
// eslint-disable-next-line import/named
import { vehicule } from '../models';

export async function findOne(id, companyId) {
  return vehicule.findOne({
    where: {
      vehicule_id: {
        [Op.eq]: id,
      },
      company_id: {
        [Op.eq]: companyId,
      },
    },
  });
}

/**
 * Find all vehicles of company
 * @param {number} companyId
 * @returns
 */
export async function findAll(companyId) {
  return vehicule.findAll({
    where: {
      company_id: {
        [Op.eq]: companyId,
      },
    },
  });
}

export async function create(object, transaction = null) {
  return vehicule.create(object, {
    transaction,
  });
}

export async function update(object, id, companyId, transaction = null) {
  return vehicule.update(object, {
    where: {
      vehicule_id: {
        [Op.eq]: id,
      },
      company_id: {
        [Op.eq]: companyId,
      },
    },
    transaction,
  });
}

/**
 * Remove the vehicle of company
 * @param {number} id
 * @param {number} companyId
 * @param {function} transaction
 * @returns
 */
export async function remove(id, companyId, transaction = null) {
  return vehicule.destroy({
    where: {
      vehicule_id: {
        [Op.eq]: id,
      },
      company_id: {
        [Op.eq]: companyId,
      },
    },
    transaction,
  });
}
