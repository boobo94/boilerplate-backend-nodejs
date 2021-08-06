import { Op } from 'sequelize';
import { user } from '../models';

export function findByUsername(username) {
  return user.findOne({
    where: {
      username: {
        [Op.eq]: username,
      },

    },
  });
}

export function update() {
// todo: make this
}
