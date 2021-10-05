import statusCodes from '../../services/status-codes';
import errors from '../../locales/errors.json';
import { DecodeJWT } from '../../services/jwt';
import { findOne } from '../../database/services/user';

export default async (req, res, next) => {
  try {
    // check if user exists
    const { userId } = DecodeJWT(req.headers.authorization);
    const user = await findOne(userId);
    if (!user) {
      return res.status(statusCodes.UNAUTHORIZED).send({ error: errors.UNAUTHORIZED });
    }

    req.userId = userId;
    req.companyId = user.company_id;
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(statusCodes.UNAUTHORIZED).send({ error: errors.JWT_EXPIRED });
    }

    return res.status(statusCodes.UNAUTHORIZED).send({ error: errors.UNAUTHORIZED });
  }

  return next();
};
