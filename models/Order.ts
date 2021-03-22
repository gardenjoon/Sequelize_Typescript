import { sequelize } from "../config/config";
import { DataTypes, Model, Association } from "sequelize";
import { User } from "./User";
import { Product } from "./Product";

interface OrderAttributes {
  user_id:number;
  product_id: number;
}

class Order extends Model<OrderAttributes> {
  // public user_id!: number;
  // public product_id!: number;
  // public readonly createdAt!: Date;
  // public readonly updatedAt!: Date;
}

Order.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_id : {
      type : DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps : true,
  }
)



export {Order}