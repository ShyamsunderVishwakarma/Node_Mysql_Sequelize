'use strict';
module.exports = function(sequelize, DataTypes) {
  var userdetails = sequelize.define('userdetails', {
    id: {
          type:DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true,
           allowNull:false
        },
    firstname: {
          type:DataTypes.STRING,
          allowNull:false
        },
    lastname: {
          type:DataTypes.STRING,
          allowNull:true,
          defaultValue: ""
        },
    emailid: {
          type:DataTypes.STRING,
          allowNull:false,
          validate : {
            isEmail : {
              arg : true,
              msg: "Email address must be valid"
            }
          }
        }
  }, {
    timestamps:false,
    hooks :{
      beforeCreate : function(user,option,fn){
        console.log("Call before Created!!! : user :", + JSON.stringify(user))
        console.log("Call before Created!!! : option : ", + JSON.stringify(option))

        var obj = {
          msg : "FirstName length should be greater than 3",
          value : user.firstname
        }

        if((user.firstname).length < 4)
        {
          throw obj;
        }

      },
      beforeDestroy : function(user,option){
        console.log("Call before Destroy!!! : user : " + JSON.stringify(user))
        console.log("Call before Destroy!!! : option : " + JSON.stringify(option))
      }
    }
  });
  return userdetails;
};