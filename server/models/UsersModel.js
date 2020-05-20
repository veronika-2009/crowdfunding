const Sequelize = require('sequelize');
const db = require('../../server');
const Roles = require('./RolesModel');
const User_Role = require('./User_Role');
const Company = require('./Model');
const Role = require('../models/RolesModel');


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
        },
        name: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)
User.belongsToMany(Roles, { through: User_Role })
User.hasMany(Company, { foreignKey: 'newUserId' })
module.exports = User;
db.sequelize.sync().then(result => {
    const admin = {
        roles: [{
            roles: 'admin'
        }],
        login: 222222,
        password: 222222,
        email: 222222,
        name: 'admin'
    }
    User.findOne({
        where: {
            email: 222222
        }
    }).then(data => {
        if (!data) {
            User.create(admin, { include: [{ model: Role, as: 'roles' }] });
            
        } else {
           return ({ error: 'Admin already exist' })
        }
    })
})
    .catch(err => console.log(err));