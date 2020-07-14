const User = {
    role: {
        resolve(parent, args, { db }, info) {
            return db.Role.findOne({
                where: { id: parent.dataValues.fk_role_id },
            })
        },
    },
}

export { User as default }
