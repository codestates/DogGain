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
      this.belongsTo(models.Users);
      this.belongsTo(models.Deals);
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
