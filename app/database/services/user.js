import { Op } from 'sequelize';
import { user } from '../models';

export function findOne(id) {
  return user.findOne({
    where: {
      user_id: {
        [Op.eq]: id,
      },
    },
  });
}

export function findByUsername(username) {
  return user.findOne({
    where: {
      username: {
        [Op.eq]: username,
      },
    },
  });
}

export function update(object, id, transaction = null) {
  return user.update(object, {
    where: {
      user_id: {
        [Op.eq]: id,
      },
    },
    transaction,
  });
}
