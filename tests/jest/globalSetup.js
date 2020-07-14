require("@babel/register")

const server = require("../../server").default

module.exports = async () => {
  global.httpServer = await server.listen({ port: 4000 })
}
