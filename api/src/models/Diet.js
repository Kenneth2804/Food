const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('diets', {
   
Dname: {
    type: DataTypes.STRING,
    allowNull:false,

}


},
{timestamps: false,});

};
