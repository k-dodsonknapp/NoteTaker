'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Notebooks', [
        {
          userId: 1,
          title: "This is a title of a Notebook",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          title: "This Notebook if for Class",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          title: "This Notebook is for all my thoughts and dreams",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          title: "This Notebook is for my grocery spending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          title: "This is another Notebook",
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
      return queryInterface.bulkDelete('Notebooks', null, {});
  }
};
