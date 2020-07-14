module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "Users",
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      first_name: {
        type: DataTypes.STRING,
      },
      last_name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      fk_role_id: {
        defaultValue: 2, // 1 => admin, 2 => user
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: { tableName: "roles" }, key: "id" },
      },
      is_active: {
        type: DataTypes.BOOLEAN,
      },
    },
    {}
  )

  User.associate = (models) => {
    models.User.belongsTo(models.Role, {
      as: "Role",
      foreignKey: "fk_role_id",
    })
  }

  return User
}
