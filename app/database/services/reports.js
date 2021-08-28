// eslint-disable-next-line import/named
import { sequelize } from '../models';

/**
 * Get area reports
 * @param {number} companyId
 * @param {date} startDate
 * @param {date} endDate
 * @returns
 */
// eslint-disable-next-line import/prefer-default-export
export async function getAreaReports(companyId, startDate, endDate) {
  return sequelize.query(`
    SELECT
      reports_sintetic_area.id AS id,
      report_id,
      area_id,
      areas.name AS name,
      areas.company_id AS company_id,
      date,
      SUM( reports_sintetic_area.distance ) AS distance,
      SUM( reports_sintetic_area.hours ) AS hours,
      SUM( reports_sintetic_area.fuel ) AS fuel,
      GROUP_CONCAT(DISTINCT reports_sintetic.vehicule_id ORDER BY vehicule_id) AS vehicule_id_list

    FROM reports_sintetic_area
    JOIN reports_sintetic ON reports_sintetic.id = report_id
    JOIN areas ON areas.id = area_id

    WHERE
      date >= :startDate
      AND
      date <= :endDate

    GROUP BY id, date, area_id
    HAVING
      areas.company_id= :companyId
      AND
      hours * 60 > 10 -- get only reports which are above 10 minutes
  `, {
    replacements: {
      startDate,
      endDate,
      companyId,
    },
  });
}
