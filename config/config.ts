import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('seq','root','111111', {
  host: 'localhost',
  dialect: 'mysql',
});