const Sequelize = require("sequelize");
const db = require("../../server");
const Image = require("./ImageModel");
const Video = require("./VideoModel");


const Company = db.sequelize.define(
    "company",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: false
        },
        nameCompany: {
            type: Sequelize.STRING,
            allowNull: true,
            unique: false
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
        timestamps: false,
    }
)
Company.hasMany(Image, { foreignKey: "id" })
Company.hasMany(Video, { foreignKey: "id"})
module.exports = Company;
db.sequelize.sync().then(result => {
})
    .catch(err => console.log(err));