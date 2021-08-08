import statusCodes from '../../../../services/status-codes';
import errors from '../../../../locales/errors.json';
import { findAll } from '../../../../database/services/vehicle';

export default async (req, res) => {
  try {
    const vehicles = await findAll(req.companyId);

    return res.status(statusCodes.OK).send(vehicles);
  } catch (error) {
    return res.status(statusCodes.SERVER_INTERNAL_ERROR).send({ error: errors.SERVER_ERROR });
  }
};
