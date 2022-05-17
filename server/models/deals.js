'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Deals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.Deals.hasMany(models.Comments);
    }
  }
  Deals.init(
    {
      origin_username: DataTypes.STRING,
      origin_url: DataTypes.STRING,
      origin_img_url: DataTypes.STRING,
      origin_shopname: DataTypes.STRING,
      origin_sitename: DataTypes.STRING,
      origin_title: DataTypes.STRING,
      origin_views: DataTypes.INTEGER,
      origin_price: DataTypes.INTEGER,
      origin_created_at: DataTypes.DATE,
      origin_updated_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Deals',
    }
  );
  return Deals;
};
