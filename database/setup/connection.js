// Imports
import { Sequelize } from "sequelize"

const connection = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_URL,
    port: process.env.DATABASE_PORT,
    dialect: process.env.DATABASE_DIALECT,
    define: {
      // prevent sequelize from pluralizing table names
      freezeTableName: true,
    },
    logging: false,
    dialectOptions: {
      timezone: "local",
    },
    /* dialectOptions: {
         // Your mariadb options here
         connectTimeout: 10000,
         }, */
  }
)

/* // Test connection
 console.info("Connecting database...")

 connection
 .authenticate()
 .then(() => {
 console.info("Database connected.")
 })
 .catch((err) => {
 console.error("ERROR - Unable to connect to the database:", err)
 }) */

export { connection as default }
