module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Roles",
      [
        {
          id: 1,
          name: "Administrator",
          code: "ADMINISTRATOR",
          is_active: true,
          createdAt: "2017-01-01 12:00:00",
          updatedAt: "2017-01-01 12:00:00",
        },
        {
          id: 2,
          name: "User",
          code: "USER",
          is_active: true,
          createdAt: "2017-01-01 12:00:00",
          updatedAt: "2017-01-01 12:00:00",
        },
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Roles", null, {})
  },
}
