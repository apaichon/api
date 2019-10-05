// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const newsAssets = sequelizeClient.define('newsAssets', {
    assetId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    newsId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
    ,
    monthYear: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    mediaTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
    , mimeType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fileName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fileExtension: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fileSize: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fileUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    markDownContent: {
      type: DataTypes.STRING,
      allowNull: true
    },
    youtubeContentId: {
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
    }
    , updatedBy: {
      type: DataTypes.STRING,
      allowNull: true
    },
    transStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    price: {
      type: DataTypes.NUMBER,
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
  newsAssets.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return newsAssets;
};
