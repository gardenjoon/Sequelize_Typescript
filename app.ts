import { sequelize } from "./config/config"
import {User} from "./models/User";
import {Product} from "./models/Product";
import {Order} from "./models/Order";
import {Address} from "./models/Address";

User.hasMany(Order, {
  sourceKey : 'id',
  foreignKey : "user_id"
})
User.hasMany(Address, {
  sourceKey : 'id',
  foreignKey : "user_id"
})
Product.hasMany(Order, {
  sourceKey : 'id',
  foreignKey : 'product_id'
})

Order.belongsTo(User, {
  foreignKey : 'user_id',
  targetKey : 'id'
})
Order.belongsTo(Product, {
  foreignKey : 'product_id',
  targetKey : 'id'
})
Address.belongsTo(User, {
  targetKey : 'id',
  foreignKey : 'user_id',
  as : 'userHasManyAddresses'
})

sequelize.sync({force:true})
