const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLA = 'users';

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class User extends Model{
  static associate(){
    //relaciones
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: USER_TABLA,
      modelNAme: 'User',
      timeStamps: false,
    }
  }
}


module.exports = { USER_TABLA, UserSchema, User }