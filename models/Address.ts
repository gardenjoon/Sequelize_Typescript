import { sequelize } from "../config/config";
import { DataTypes, Model } from "sequelize";

interface AddressAttributes {
  user_id:number;
  address: string;
  address_detail: string;
}

class Address extends Model<AddressAttributes> {}
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