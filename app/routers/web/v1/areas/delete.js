import statusCodes from '../../../../services/status-codes';
import errors from '../../../../locales/errors.json';
import { remove } from '../../../../database/services/area';

export default async (req, res) => {
  try {
    await remove(req.params.areaId, req.companyId);

    return res.status(statusCodes.NO_CONTENT).send();
  } catch (error) {
    return res.status(statusCodes.SERVER_INTERNAL_ERROR).send({ error: errors.SERVER_ERROR });
  }
};
