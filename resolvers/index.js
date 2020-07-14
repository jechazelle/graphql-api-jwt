import Query from "./Queries"
import Mutation from "./Mutations/index"
import User from "./User"

const resolvers = {
  Query,
  Mutation,
  User,
}

export { resolvers as default }
