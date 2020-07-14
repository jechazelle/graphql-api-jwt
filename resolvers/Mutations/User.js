import bcrypt from "bcryptjs"
import hashPassword from "../../utils/hashPassword"
import generateToken from "../../utils/generateToken"

const login = async (parent, args, { db }) => {
  const user = await db.User.findOne({
    where: { email: args.data.email },
  })

  if (!user) {
    throw new Error("Unable to login.")
  }

  const isMatch = await bcrypt.compare(args.data.password, user.password)

  if (!isMatch) {
    throw new Error("Unable to login.")
  }

  return {
    user,
    token: generateToken(user.id),
  }
}

const createUser = async (parent, args, { db }) => {
  const emailTaken = await db.User.findOne({
    where: { email: args.data.email },
  })

  if (emailTaken) {
    throw new Error("Email taken.")
  }

  const password = await hashPassword(args.data.password)
  const user = await db.User.create({
    ...args.data,
    password,
  })

  return {
    user,
    token: generateToken(user.id),
  }
}

export { createUser, login }
