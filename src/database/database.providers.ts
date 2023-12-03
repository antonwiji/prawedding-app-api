import { Sequelize } from 'sequelize-typescript';
import { Users } from 'src/models/users/users.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.APP_WEDDING_HOST,
        port: parseInt(process.env.APP_WEDDING_PORT),
        username: process.env.APP_WEDDING_USERNAME,
        password: process.env.APP_WEDDING_PASSWORD,
        database: process.env.APP_WEDDING_DB,
      });
      sequelize.addModels([Users]);
      await sequelize.sync();
      return sequelize;
    },
  },
];

console.log('nilai', process.env.APP_WEDDING_USERNAME);
