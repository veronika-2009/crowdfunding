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
        short_description: {
            type: Sequelize.STRING,
            unique: false,
            allowNull: true
        },
        tag: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        days: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        many: {
            type: Sequelize.INTEGER,
            allowNull: true
        }
    },
    {
        timestamps: false
    },
    "video_link",
    {
        id_video: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        link: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        }
    },
    "image_link",
    {
        id_image: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        link_image: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        }
    }
)
