import statusCodes from '../../../../services/status-codes';
import errors from '../../../../locales/errors.json';
import { findAll } from '../../../../database/services/area';

export default async (req, res) => {
  try {
    const areas = await findAll(req.companyId);

    return res.status(statusCodes.OK).send(areas);
  } catch (error) {
    return res.status(statusCodes.SERVER_INTERNAL_ERROR).send({ error: errors.SERVER_ERROR });
  }
};
