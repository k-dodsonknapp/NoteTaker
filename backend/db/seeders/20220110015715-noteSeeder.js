'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Notes', [
        {
          userId: 1,
          notebookId: 1,
          title: "I have no clue",
          content: "This is the whole note",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          notebookId: 2,
          title: "I have no clue",
          content: "This is the whole note",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          notebookId: 3,
          title: "I have no clue",
          content: "This is the whole note",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          notebookId: 4,
          title: "I have no clue",
          content: "This is the whole note",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          notebookId: 5,
          title: "I have no clue",
          content: "This is the whole note",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Notes', null, {});
  }
};
