'use strict';
module.exports = function(sequelize, DataTypes) {
  var warehouse = sequelize.define('warehouse', {
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allownull:false 
    },
    userid:{
      type:DataTypes.INTEGER,
      allownull:false
    },
    warehousename: {
      type:DataTypes.STRING,
      allownull:false
    },
    warehouseaddress: {
      type:DataTypes.STRING,
      allownull:true
    }
  }, {
    timestamps:false
  });

  warehouse.associate = function(models){
    warehouse.belongsTo(models.userdetails,{
      foreignKey: 'userid'
    });
  }
  return warehouse;
};