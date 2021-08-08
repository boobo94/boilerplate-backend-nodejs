import statusCodes from '../../../../services/status-codes';
import errors from '../../../../locales/errors.json';
import { findAll } from '../../../../database/services/division';

export default async (req, res) => {
  try {
    const divisions = await findAll();

    return res.status(statusCodes.OK).send(divisions);
  } catch (error) {
    return res.status(statusCodes.SERVER_INTERNAL_ERROR).send({ error: errors.SERVER_ERROR });
  }
};
