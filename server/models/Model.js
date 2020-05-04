const Sequelize = require('sequelize');
const db = require('../../server');

const Company = db.sequelize.define(
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
            allowNull: true,
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
    }
)
module.exports = Company;


db.sequelize.sync().then(result=>{
  })
  .catch(err=> console.log(err));