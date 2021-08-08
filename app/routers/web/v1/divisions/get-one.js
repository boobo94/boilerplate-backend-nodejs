import statusCodes from '../../../../services/status-codes';
import errors from '../../../../locales/errors.json';
import { findOne } from '../../../../database/services/division';

export default async (req, res) => {
  try {
    const division = await findOne(req.params.divisionId);
    if (!division) {
      return res.status(statusCodes.NOT_FOUND).send({ error: errors.RESOURCE_NOT_FOUND });
    }

    return res.status(statusCodes.OK).send(division);
  } catch (error) {
    return res.status(statusCodes.SERVER_INTERNAL_ERROR).send({ error: errors.SERVER_ERROR });
  }
};
