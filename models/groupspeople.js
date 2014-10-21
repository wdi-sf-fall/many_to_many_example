"use strict";

module.exports = function(sequelize, DataTypes) {
  var GroupsPeople = sequelize.define("GroupsPeople", {
    GroupId: DataTypes.INTEGER,
    PersonId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return GroupsPeople;
};
