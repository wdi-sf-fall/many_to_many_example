"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("GroupsPeople", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      GroupId: {
        type: DataTypes.INTEGER,
        references: "Groups",
        referencesKey: "id"
      },
      PersonId: {
        type: DataTypes.INTEGER,
        references: "People",
        referencesKey: "id"
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("GroupsPeople").done(done);
  }
};