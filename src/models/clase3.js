const { Sequelize, DataTypes, Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Object extends Model {
    /**
     * funciones
     * relaciones del modelo con otros
     */
  }
  Object.init(
    {
      id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.TEXT,
      },
      species: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      age: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      color: {
        type: DataTypes.TEXT,
        defaultValue: "none",
      },
    },
    {
      sequelize,
      modelName: "Object",
      timestamps: true,
      paranoid: true,
    }
  );
  return Object;
};
