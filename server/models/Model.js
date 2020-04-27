const Sequelize = require('sequelize');
const db = require('../../server');

module.exports = db.sequelize.define(
    "company",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nameCompany: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: Sequelize.STRING,
            unique: false,
            allowNull: true
        },
        tag: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: Sequelize.NOW
        }
    },
    {
        timestamps: false
    }
)
