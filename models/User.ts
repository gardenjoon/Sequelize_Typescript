import { sequelize } from "../config/config";
import { DataTypes, Model } from "sequelize";
import { Order } from "./Order";
import { Address } from "./Address";

interface UserAttributes {
  id:number;
  name: string;
  phonenumber: string;
}

class User extends Model<UserAttributes> {
  // public readonly id!: number;
  // public name!: string;
  // public phonenumber!: number;
  // public readonly createdAt!: Date;
  // public readonly updatedAt!: Date;
}

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