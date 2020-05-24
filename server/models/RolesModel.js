const Sequelize = require("sequelize");
const db = require("../../server");


const Roles = db.sequelize.define(
    "roles",
    {
        roleId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        roles: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)
module.exports = Roles;
db.sequelize.sync().then(result => {
})
    .catch(err => console.log(err));