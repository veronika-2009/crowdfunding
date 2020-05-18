const Sequelize = require('sequelize');
const db = require('../../server');
const Roles = require('./RolesModel');
const User_Role = require('./User_Role');
const Company = require('./Model');

const User = db.sequelize.define(
    "newUser",
    {
        newUserId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        login: {
            type: Sequelize.STRING,
            unique: true
        },
        password: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)
User.belongsToMany(Roles,{ through: User_Role})
User.hasMany(Company,{ foreignKey: 'id'})
module.exports = User;
db.sequelize.sync().then(result => {
    console.log('table created')
})
    .catch(err => console.log(err));