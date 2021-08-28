import { Op } from 'sequelize';
// eslint-disable-next-line import/named
import { user } from '../models';

export async function findOne(id) {
  return user.findOne({
    where: {
      user_id: {
        [Op.eq]: id,
      },
    },
  });
}

export async function findByUsername(username) {
  return user.findOne({
    where: {
      username: {
        [Op.eq]: username,
      },
    },
  });
}

export async function update(object, id, transaction = null) {
  return user.update(object, {
    where: {
      user_id: {
        [Op.eq]: id,
      },
    },
    transaction,
  });
}
