import crypto from 'crypto';
import statusCodes from '../../../../services/status-codes';
import errors from '../../../../locales/errors.json';
import * as userService from '../../../../database/services/user';
import { GenerateJWT } from '../../../../services/jwt';

export default async (req, res) => {
  try {
    const user = await userService.findByUsername(req.body.username);
    if (!user) {
      return res.status(statusCodes.UNAUTHORIZED).send({ error: errors.UNAUTHORIZED });
    }

    // check if the password is correct
    const passwordhash = crypto.createHash('sha1').update(`${process.env.SECURITY_SALT}${req.body.password}`).digest('hex');
    if (passwordhash !== user.password) {
      return res.status(statusCodes.UNAUTHORIZED).send({ error: errors.UNAUTHORIZED });
    }

    return res.status(statusCodes.OK).send({
      token: GenerateJWT({
        userId: user.user_id,
      }),
    });
  } catch (error) {
    return res.status(statusCodes.SERVER_INTERNAL_ERROR).send({ error: errors.SERVER_ERROR });
  }
};
