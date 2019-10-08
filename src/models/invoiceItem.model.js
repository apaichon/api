// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const invoiceItem = sequelizeClient.define('invoiceItem', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
    ,
    invoiceNo:{
      type: DataTypes.STRING,
      allowNull: true
    }
    ,item:{
      type: DataTypes.STRING,
      allowNull: true
    }
    ,
    price:{
      type: DataTypes.NUMBER,
      allowNull : true
    }
    ,amount:{
      type: DataTypes.NUMBER,
      allowNull : true
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
  invoiceItem.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return invoiceItem;
};
