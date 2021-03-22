import { sequelize } from "../config/config";
import { DataTypes, Model } from "sequelize";

interface UserAttributes {
  id:number;
  name: string;
  phonenumber: string;
}

class User extends Model<UserAttributes> {}
User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    name : {
      type : DataTypes.STRING,
      allowNull: false
    },
    phonenumber : {
      type : DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps : true,
  })



export {User}