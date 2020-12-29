"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Mems", [
      {
        name: "Ali",
        email: "ali@g.com",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bilal",
        email: "bilal@g.com",
        status: "inactive",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Danial",
        email: "danial@g.com",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ehsan",
        email: "ehsan@g.com",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Farhan",
        email: "farhan@g.com",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Mems", null, {});
  },
};
