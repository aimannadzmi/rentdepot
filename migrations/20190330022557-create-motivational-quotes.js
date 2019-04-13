'use strict';
module.exports = {
  up: (db, Sequelize) => {
    return db.createTable('items', {
      username: {
        primaryKey: true,
        type: Sequelize.STRING
      },
      itemName: {
        type: Sequelize.STRING
      },
      itemPrice: {
        type: Sequelize.STRING
      },
      itemDescription: {
        type: Sequelize.STRING
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
  down: (db, Sequelize) => {
    return db.dropTable('items');
  }
};