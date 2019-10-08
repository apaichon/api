// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const invoice = sequelizeClient.define('invoice', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    invoiceDate:{
      type: DataTypes.DATE,
      allowNull: true
    },
    invoiceNo:{
      type: DataTypes.STRING,
      allowNull: true
    },
    dueDate:{
      type: DataTypes.DATE,
      allowNull: true
    },
    name:{
      type: DataTypes.STRING,
      allowNull: true
    }
    ,
    address:{
      type: DataTypes.STRING,
      allowNull: true
    },
    taxId:{
      type: DataTypes.STRING,
      allowNull: true
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
  invoice.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return invoice;
};
