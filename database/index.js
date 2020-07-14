// Imports
import Sequelize from "sequelize"
import path from "path"
// App Imports
import connection from "./setup/connection"

const models = {
  Role: require(path.join(__dirname, "./models/role"))(connection, Sequelize),
  User: require(path.join(__dirname, "./models/user"))(connection, Sequelize),
}
Object.keys(models).forEach((modelName) => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models)
  }
})
models.sequelize = connection
models.Sequelize = Sequelize
export { models as default }
