import moment from 'moment';
import statusCodes from '../../../../services/status-codes';
import errors from '../../../../locales/errors.json';
import { getAreaReports } from '../../../../database/services/reports';

export default async (req, res) => {
  try {
    const startDate = req.query.start_date
      ? moment(req.query.start_date).toDate()
      : moment(req.query.start_date).subtract({ months: 2 }).toDate();
    const endDate = moment(req.query.end_date).toDate();

    const reports = await getAreaReports(req.companyId, startDate, endDate);

    return res.status(statusCodes.OK).send(reports);
  } catch (error) {
    return res.status(statusCodes.SERVER_INTERNAL_ERROR).send({ error: errors.SERVER_ERROR });
  }
};
