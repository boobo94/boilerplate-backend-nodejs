import dbConnection from './models/index';

export const InitDB = () => {
  // sync database models
  dbConnection.sequelize
    .sync({
      force: false,
    })
    .then(() => {
      // eslint-disable-next-line no-console
      console.log('synced models');
    })
};
