'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {model: "Users"}
    },
    notebookId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {model: "Notebooks"}
    },
    title: {
      type: Sequelize.STRING(255)
    },
    content: {
      type: Sequelize.TEXT
    },
  }, {});
  Note.associate = function(models) {
    // associations can be defined here
    Note.belongsTo(models.User, {foreignKey: "userId"});
    Note.belongsTo(models.Notebook, {foreignKey: "notebookId"});
  };
  return Note;
};
