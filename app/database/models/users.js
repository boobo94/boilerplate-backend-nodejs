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
      type: DataTypes.TINYINT,
      allowNull: false,
    },
  });

  // eslint-disable-next-line no-unused-vars
  users.associate = (models) => {
    // todo:  uncomment the line below
    // admin.belongsTo(models.company);
  };

  return users;
};
