import { sequelize } from "../config/config";
import { DataTypes, Model } from "sequelize";

interface ProductAttributes {
  id:number;
  name: string;
  company: string;
  price: number;
}

class Product extends Model<ProductAttributes> {}
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
