import { sequelize } from "../config/config";
import { DataTypes, Model, Association } from "sequelize";
import { User } from "./User";

interface AddressAttributes {
  user_id:number;
  address: string;
  address_detail: string;
}

class Address extends Model<AddressAttributes> {
  // public user_id!: number;
  // public address!: string;
  // public address_detail!: string;
  // public readonly createdAt!: Date;
  // public readonly updatedAt!: Date;
  // public static associations: {
  //   userHasManyAddresses: Association<User,Address>,
  // }
}

Address.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address : {
      type : DataTypes.STRING,
      allowNull: false
    },
    address_detail : {
      type : DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps : true,
  })



export {Address}