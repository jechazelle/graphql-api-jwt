import RolesSeed from "../../database/seeders/0001-roles"
import UsersSeed from "../../database/seeders/0001-users"

module.exports = (queryInterface) => {
  return Promise.all([
    RolesSeed.up(queryInterface),
    UsersSeed.up(queryInterface),
  ]).then(() => {
    return "Seed done"
  })
}
