"use strict";

module.exports = function(sequelize, DataTypes) {
  var Group = sequelize.define("Group", {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Group.hasMany(models.Person, {onDelete: "NO ACTION"});
      }
    }
  });

  return Group;
};
