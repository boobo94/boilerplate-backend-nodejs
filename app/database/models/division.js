import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const division = sequelize.define('division', {
    devision_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.CHAR(40),
      allowNull: false,
    },
  });

  division.associate = (models) => {
    division.hasMany(models.vehicule, { foreignKey: 'division_id' });
  };

  return division;
};
