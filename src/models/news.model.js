// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const news = sequelizeClient.define('news', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    newsCategoryId:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tags: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    genreId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    geolocation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    locationAddress: {
      type: DataTypes.STRING,
      allowNull: true
    },
    thumnailUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    salesCondition: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    totalPrice: {
      type: DataTypes.NUMBER,
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
    },
    transStatusId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  news.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return news;
};
