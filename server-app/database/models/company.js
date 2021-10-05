import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const company = sequelize.define('company', {
    company_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    client_address: {
      type: DataTypes.TEXT,
    },
    billing_address: {
      type: DataTypes.TEXT,
    },

  });

  company.associate = (models) => {
    company.hasMany(models.user, { foreignKey: 'user_id' });
  };

  return company;
};
