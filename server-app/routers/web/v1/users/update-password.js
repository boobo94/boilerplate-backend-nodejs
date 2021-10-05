import crypto from 'crypto';
import statusCodes from '../../../../services/status-codes';
import errors from '../../../../locales/errors.json';
import { update } from '../../../../database/services/user';

export default async (req, res) => {
  try {
    const passwordhash = crypto.createHash('sha1').update(`${process.env.SECURITY_SALT}${req.body.password}`).digest('hex');

    await update({
      password: passwordhash,
    }, req.userId);

    return res.status(statusCodes.NO_CONTENT).send();
  } catch (error) {
    return res.status(statusCodes.SERVER_INTERNAL_ERROR).send({ error: errors.SERVER_ERROR });
  }
};
