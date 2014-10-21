"use strict";

module.exports = function(sequelize, DataTypes) {
  var Person = sequelize.define("Person", {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Person.hasMany(models.Group, {onDelete: "NO ACTION"});
      }
    }
  });

  return Person;
};
