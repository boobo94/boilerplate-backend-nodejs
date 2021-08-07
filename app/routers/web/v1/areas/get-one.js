import statusCodes from '../../../../services/status-codes';
import errors from '../../../../locales/errors.json';
import { findOne } from '../../../../database/services/area';

export default async (req, res) => {
  try {
    const area = await findOne(req.params.areaId, req.companyId);
    if (!area) {
      return res.status(statusCodes.NOT_FOUND).send({ error: errors.RESOURCE_NOT_FOUND });
    }

    return res.status(statusCodes.OK).send(area);
  } catch (error) {
    return res.status(statusCodes.SERVER_INTERNAL_ERROR).send({ error: errors.SERVER_ERROR });
  }
};
