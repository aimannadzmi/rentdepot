//Create the table for sequelize

module.exports = function(sequelize, DataTypes) {
    let items = sequelize.define("items", {
      username: DataTypes.TEXT,
      itemName: DataTypes.TEXT,
      itemPrice: DataTypes.TEXT,
      itemDescription: DataTypes.TEXT,
      itemLocation: DataTypes.TEXT,
      itemImage:DataTypes.BLOB
    });
    return items;
  };
  