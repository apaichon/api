// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const receiptItem = sequelizeClient.define('receiptItem', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
    ,
    receiptNo:{
      type: DataTypes.STRING,
      allowNull: true
    }
    ,item:{
      type: DataTypes.STRING,
      allowNull: true
    }
    ,
    price:{
      type: DataTypes.DOUBLE,
      allowNull : true
    }
    ,amount:{
      type: DataTypes.INTEGER,
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
  receiptItem.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return receiptItem;
};
