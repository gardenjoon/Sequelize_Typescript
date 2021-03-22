import { sequelize } from "../config/config";
import { DataTypes, Model } from "sequelize";
import { Order } from "./Order";

interface ProductAttributes {
  id:number;
  name: string;
  company: string;
  price: number;
}

class Product extends Model<ProductAttributes> {
  // public readonly id!: number;
  // public name!: string;
  // public company!: string;
  // public price!: number;
  // public readonly createdAt!: Date;
  // public readonly updatedAt!: Date;
}

Product.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    name : {
      type : DataTypes.STRING,
      allowNull: false
    },
    company : {
      type : DataTypes.STRING,
      allowNull: false
    },
    price : {
      type : DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps : true,
  })



  export {Product}
