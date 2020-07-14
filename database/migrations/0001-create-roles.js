module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("Roles", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            code: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            is_active: {
                defaultValue: 1,
                type: Sequelize.BOOLEAN,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("Roles")
    },
}
