// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const buyPackageHistory = sequelizeClient.define('buyPackageHistory', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
    ,
    buyDate:{
      type: DataTypes.DATE,
      allowNull: true
    }
    ,
    paymentBy:{
      type: DataTypes.STRING,
      allowNull: true
    }
    ,
    package:{
      type: DataTypes.STRING,
      allowNull: true
    },
    amount:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    totalCoins:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    paymentType:{
      type: DataTypes.STRING,
      allowNull: true
    },
    paymentStatus:{
      type: DataTypes.STRING,
      allowNull: true
    },
    createdAt: {
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
  buyPackageHistory.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return buyPackageHistory;
};
