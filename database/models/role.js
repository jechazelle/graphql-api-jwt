module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define(
        "Roles",
        {
            id: {
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER,
            },
            name: {
                type: DataTypes.STRING,
            },
            code: {
                type: DataTypes.STRING,
            },
            is_active: {
                type: DataTypes.BOOLEAN,
            },
        },
        {}
    )

    Role.associate = (models) => {}

    return Role
}
