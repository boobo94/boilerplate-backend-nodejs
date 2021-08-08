import statusCodes from '../../../../services/status-codes';
import errors from '../../../../locales/errors.json';
import { findOne } from '../../../../database/services/vehicle';

export default async (req, res) => {
  try {
    const vehicle = await findOne(req.params.vehicleId, req.companyId);
    if (!vehicle) {
      return res.status(statusCodes.NOT_FOUND).send({ error: errors.RESOURCE_NOT_FOUND });
    }

    return res.status(statusCodes.OK).send(vehicle);
  } catch (error) {
    return res.status(statusCodes.SERVER_INTERNAL_ERROR).send({ error: errors.SERVER_ERROR });
  }
};
