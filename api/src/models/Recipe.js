const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {

id: {
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  primaryKey: true,
  allowNull: false
},
title: {
  type: DataTypes.STRING,
  allowNull: false,

},
summary: {
  type: DataTypes.STRING,
  allowNull: false
},
healthScore: {
  type: DataTypes.INTEGER,
  allowNull: true,

  
  },
image: {
type: DataTypes.STRING,
allowNull: true,

},
  
steps: {
type: DataTypes.STRING,
allowNull: true,

},
createdInBd:{
  type: DataTypes.BOOLEAN,
  allowNull: false,
  defaultValue: true,
}

}, {timestamps: false,   updatedAt: false,   createdAt: false, recipeId: false, dietId: false, recipe_diet: false});

};
