import { ApolloServer, gql } from "apollo-server"
import fs from "fs"
import db from "./database/index"
import resolvers from "./resolvers/index"

const typeDefs = gql`
  ${fs.readFileSync(__dirname.concat("/schema.graphql"), "utf8")}
`

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context(request) {
    return {
      db,
      request,
    }
  },
})

export { server as default }
