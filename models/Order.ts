import { sequelize } from "../config/config";
import { DataTypes, Model } from "sequelize";

interface OrderAttributes {
  user_id:number;
  product_id: number;
}

class Order extends Model<OrderAttributes> {}
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