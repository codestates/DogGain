'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Comments.belongsTo(models.Users, {
        foreignKey: 'user_Id',
        sourceKey: 'id'
      });
      models.Comments.belongsTo(models.Deals, {
        foreignKey: 'deal_Id',
        sourceKey: 'id'
      });

    }
  }
  Comments.init(
    {
      comment: DataTypes.STRING,
      is_review: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Comments',
    }
  );
  return Comments;
};
