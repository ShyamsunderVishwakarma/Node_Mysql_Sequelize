'use strict';
module.exports = function(sequelize, DataTypes) {
  var store = sequelize.define('store', {
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
    storename:{ 
      type:DataTypes.STRING,
      allownull:false
    },
    storeaddress:{ 
      type:DataTypes.STRING
    }
  }, {
    timestamps:false
  });

  store.associate = function(models){
    store.belongsTo(models.userdetails,{
      foreignKey: 'userid'
    });
  }

  return store;
};