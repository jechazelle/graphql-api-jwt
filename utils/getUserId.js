import jwt from "jsonwebtoken"

const getUserId = (request) => {
  const header = request.req.headers.authorization

  if (header) {
    const token = header.replace("Bearer ", "")
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    return decoded.userId
  }

  return null
}

export { getUserId as default }
