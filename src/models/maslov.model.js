// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const maslov = sequelizeClient.define('maslov', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    seq:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lovname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false
    }
    ,
    name_en_us: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name_th_th: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
    ,
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
  maslov.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return maslov;
};
