import db from "../database"
import Seed from "./utils/seed"

const initDatabase = async () => {
  await db.sequelize.drop()
  await db.sequelize.query("SET FOREIGN_KEY_CHECKS = 0", { raw: true })
  await db.sequelize
    .sync({
      force: true,
    })
    .then(() => {
      Seed(db.sequelize.queryInterface)
    })
    .catch((error) => {
      console.log(error)
    })
}
const closeConnection = async () => {
  await db.sequelize.close()
}

export { initDatabase, closeConnection }
