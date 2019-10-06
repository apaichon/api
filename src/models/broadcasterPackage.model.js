// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const broadcasterPackage = sequelizeClient.define('broadcasterPackage', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true
    }
    ,
    creditAmount :{
      type : DataTypes.NUMBER,
      allowNull: true,
    }  
    ,price:{
      type : DataTypes.NUMBER,
      allowNull: true,
    }
    ,daysDuration:{
      type : DataTypes.SMALLINT,
      allowNull: true
    },
    totalSubAccounts:{
      type : DataTypes.SMALLINT,
      allowNull: true,
    }
     
    ,createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    createdBy: {
      type: DataTypes.STRING,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedBy: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  broadcasterPackage.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return broadcasterPackage;
};
