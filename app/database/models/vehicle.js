import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const vehicle = sequelize.define('vehicule', {
    vehicule_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    notes: {
      type: DataTypes.TEXT,
    },
    notes2: {
      type: DataTypes.TEXT,
    },
    make: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    model: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    analogic_model: {
      type: DataTypes.CHAR(50),
    },
    reg_no: {
      type: DataTypes.CHAR(30),
      allowNull: false,
    },
    tank_fuel_vol: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    km: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    hours: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    min_revolutions: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    max_revolutions: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idle_revolutions: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    vehicule_image: {
      type: DataTypes.CHAR(100),
      allowNull: false,
    },
    stampila: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    culoare_marker: {
      type: DataTypes.CHAR(10),
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.INTEGER,
    },
    consum: {
      type: DataTypes.FLOAT,
    },
    start_time: {
      type: DataTypes.INTEGER,
    },
  });

  vehicle.associate = (models) => {
    vehicle.belongsTo(models.company, { foreignKey: 'company_id' });
    // vehicle.belongsTo(models.device, { foreignKey: 'device_id' }); //todo:add this
    // vehicle.belongsTo(models.division, { foreignKey: 'division_id' }); //todo:add this
    // vehicle.belongsTo(models.group, { foreignKey: 'group_id' }); //todo:add this
  };

  return vehicle;
};
