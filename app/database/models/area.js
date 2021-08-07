import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const area = sequelize.define('area', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // this is an array of coordinates [ ... [latitude,longitude], [latitude,longitude], ...]
    points: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
    },
    // this is a point of coordinates [latitude,longitude]
    rectangle: {
      type: DataTypes.TEXT,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name_public: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surface: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    prefferedMu: {
      type: DataTypes.CHAR(3),
      defaultValue: 'mp',
    },
    color: {
      type: DataTypes.CHAR(10),
      allowNull: false,
    },
    deleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_remote: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  area.associate = (models) => {
    area.belongsTo(models.company, { foreignKey: 'company_id' });
  };

  return area;
};
