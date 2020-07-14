import getUserId from "../../utils/getUserId"

const users = async (parent, args, { db }) => {
  return db.User.findAll({
    order: [["createdAt", "ASC"]],
  }).then((response) => {
    response.forEach((user) => {
      // eslint-disable-next-line no-param-reassign
      user.dataValues.password = null
    })

    return response
  })
}

const me = (parent, args, { db, request }) => {
  const userId = getUserId(request, false)

  return db.User.findOne({
    where: { id: userId },
  })
}

export { users, me }
