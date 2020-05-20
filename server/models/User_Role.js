const Sequelize = require('sequelize');
const db = require('../../server');

const User_Role = db.sequelize.define(
    "user_role",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
)
module.exports = User_Role;
db.sequelize.sync().then(result => {
})
    .catch(err => console.log(err));