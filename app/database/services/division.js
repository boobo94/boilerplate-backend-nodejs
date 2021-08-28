import { Op } from 'sequelize';
// eslint-disable-next-line import/named
import { division } from '../models';

export async function findOne(id) {
  return division.findOne({
    where: {
      devision_id: {
        [Op.eq]: id,
      },
    },
  });
}

/**
 * Find all divisions
 * @returns
 */
export async function findAll() {
  return division.findAll();
}
