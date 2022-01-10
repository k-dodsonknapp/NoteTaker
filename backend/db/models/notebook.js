'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notebook = sequelize.define('Notebook', {
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {model: "Users"}
    },
    title: {
      allowNull: false,
      type: Sequelize.STRING(255)
    },
  }, {});
  Notebook.associate = function(models) {
    Notebook.hasMany(models.Note, {foreignKey: "notebookId"});
    Notebook.belongsTo(models.User, {foreignKey: "userId"});
  };
  return Notebook;
};
