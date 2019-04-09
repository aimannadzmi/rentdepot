//Create the table for sequelize

module.exports = function(sequelize, DataTypes) {
    let items = sequelize.define("items", {
      itemName: DataTypes.TEXT,
      itemPrice: DataTypes.TEXT,
      itemDescription: DataTypes.TEXT,
      itemLocation: DataTypes.TEXT,
      itemImage:DataTypes.TEXT
    });
    return items;
  };
  