import db from "../database/index"
import "cross-fetch/polyfill"
import getClient from "./utils/getClient"
import { createUser, getUsers, login, getProfile } from "./utils/user/request"
import { initDatabase, closeConnection } from "./initDatabase"

beforeEach(async () => {
  await initDatabase()
})

afterAll(async () => {
  await closeConnection()
})

const client = getClient()

test("Should create a new user", async () => {
  const variables = {
    data: {
      first_name: "Jane",
      last_name: "Doe",
      email: "jane-doe@example.com",
      password: "password",
    },
  }
  const response = await client.mutate({
    mutation: createUser,
    variables,
  })

  const exists = await db.User.findOne({
    where: { id: parseInt(response.data.createUser.user.id, 10) },
  })

  expect(exists.first_name).toBe("Jane")
  expect(exists.last_name).toBe("Doe")
  expect(exists.email).toBe("jane-doe@example.com")
})

test("Should expose users", async () => {
  const response = await client.query({ query: getUsers })

  expect(response.data.users.length).toBe(4)
  expect(response.data.users[0].first_name).toBe("John")
  expect(response.data.users[0].last_name).toBe("Doe")
  expect(response.data.users[0].email).toBe("john-doe@example.com")
})

test("Should login with good account", async () => {
  const variables = {
    data: {
      email: "john-doe@example.com",
      password: "password",
    },
  }

  const response = await client.mutate({ mutation: login, variables })

  expect(response.data.login.user.first_name).toBe("John")
  expect(response.data.login.user.last_name).toBe("Doe")
  expect(response.data.login.user.email).toBe("john-doe@example.com")
})

test("Should not login with bad credentials", async () => {
  const variables = {
    data: {
      email: "false-user@example.com",
      password: "falsepassword",
    },
  }

  await expect(client.mutate({ mutation: login, variables })).rejects.toThrow()
})

test("Should fetch user profile", async () => {
  const variables = {
    data: {
      email: "john-doe@example.com",
      password: "password",
    },
  }

  const response = await client.mutate({ mutation: login, variables })

  // eslint-disable-next-line no-shadow
  const client2 = getClient(response.data.login.token)

  const { data } = await client2.query({ query: getProfile })

  expect(parseInt(data.me.id, 10)).toBe(1)
  expect(data.me.first_name).toBe("John")
  expect(data.me.last_name).toBe("Doe")
  expect(data.me.email).toBe("john-doe@example.com")
  expect(data.me.role.name).toBe("Administrator")
  expect(data.me.role.code).toBe("ADMINISTRATOR")
})
