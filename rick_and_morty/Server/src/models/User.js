const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      // id: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   primaryKey: true,
      //   autoIncrement: true,
      // },
      //no hace falta el id porque sequelize lo hace por defecto
      //cuando en el pi queramos guardar por id usaremos otro tipo de dato uid
      email: {
        type: DataTypes.STRING,
        isEmail: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};

//BORRAR ESTE ARCHIVO
