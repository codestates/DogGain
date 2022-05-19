'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Deals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      origin_username: {
        type: Sequelize.STRING
      },
      origin_url: {
        type: Sequelize.STRING
      },
      origin_img_url: {
        type: Sequelize.STRING
      },
      origin_shopname: {
        type: Sequelize.STRING
      },
      origin_sitename: {
        type: Sequelize.STRING
      },
      origin_title: {
        type: Sequelize.STRING
      },
      origin_views: {
        type: Sequelize.INTEGER
      },
      origin_price: {
        type: Sequelize.INTEGER
      },
      origin_created_at: {
        type: Sequelize.DATE
      },
      origin_updated_at: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Deals');
  }
};