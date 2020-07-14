module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          first_name: "John",
          last_name: "Doe",
          email: "john-doe@example.com",
          password:
            "$2a$10$KFmbFG7M.4ZeLEuKVUtlSOsu62t0hpNS2LyK1tjE92NyA/eDJMjAS",
          fk_role_id: 1,
          is_active: true,
          createdAt: "2017-01-01 12:00:00",
          updatedAt: "2017-01-01 12:00:00",
        },
        {
          id: 2,
          first_name: "Roger",
          last_name: "Road",
          email: "roger-road@example.com",
          password:
            "$2a$10$KFmbFG7M.4ZeLEuKVUtlSOsu62t0hpNS2LyK1tjE92NyA/eDJMjAS",
          fk_role_id: 2,
          is_active: true,
          createdAt: "2017-01-01 12:00:00",
          updatedAt: "2017-01-01 12:00:00",
        },
        {
          id: 3,
          first_name: "Sharon",
          last_name: "Doe",
          email: "sharon-doe@example.com",
          password:
            "$2a$10$KFmbFG7M.4ZeLEuKVUtlSOsu62t0hpNS2LyK1tjE92NyA/eDJMjAS",
          fk_role_id: 2,
          is_active: false,
          createdAt: "2017-01-01 12:00:00",
          updatedAt: "2017-01-01 12:00:00",
        },
        {
          id: 4,
          first_name: "Nathan",
          last_name: "Mount",
          email: "nathan-mount@example.com",
          password:
            "$2a$10$KFmbFG7M.4ZeLEuKVUtlSOsu62t0hpNS2LyK1tjE92NyA/eDJMjAS",
          fk_role_id: 2,
          is_active: true,
          createdAt: "2017-01-01 12:00:00",
          updatedAt: "2017-01-01 12:00:00",
        },
      ],
      {}
    )
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {})
  },
}
