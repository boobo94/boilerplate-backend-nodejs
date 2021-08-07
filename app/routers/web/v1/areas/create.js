import statusCodes from '../../../../services/status-codes';
import errors from '../../../../locales/errors.json';
import { create } from '../../../../database/services/area';

export default async (req, res) => {
  try {
    const area = await create({
      ...req.body,
      company_id: req.companyId,
      points: JSON.stringify(req.body.points),
      rectangle: JSON.stringify(req.body.rectangle),
    });

    return res.status(statusCodes.OK).send(area);
  } catch (error) {
    return res.status(statusCodes.SERVER_INTERNAL_ERROR).send({ error: errors.SERVER_ERROR });
  }
};
