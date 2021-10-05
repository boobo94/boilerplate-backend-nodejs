import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const users = sequelize.define('user', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.CHAR(40),
      allowNull: false,
    },
    admin: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  users.associate = (models) => {
    users.belongsTo(models.company, { foreignKey: 'company_id' });
  };

  return users;
};
