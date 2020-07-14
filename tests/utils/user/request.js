import { gql } from "apollo-boost"

const createUser = gql`
  mutation($data: CreateUserInput!) {
    createUser(data: $data) {
      token
      user {
        id
        first_name
        last_name
        email
      }
    }
  }
`

const getUsers = gql`
  query {
    users {
      id
      first_name
      last_name
      email
    }
  }
`

const login = gql`
  mutation($data: LoginUserInput!) {
    login(data: $data) {
      user {
        first_name
        last_name
        email
      }
      token
    }
  }
`

const getProfile = gql`
  query {
    me {
      id
      first_name
      last_name
      email
      role {
        name
        code
      }
    }
  }
`

export { createUser, getUsers, login, getProfile }
