
const Sequelize = require('sequelize');
const db = require('../../server');

const Image = db.sequelize.define(
    "image_link",
    {
        id_image: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        link_image: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)

module.exports = Image;
db.sequelize.sync().then(result=>{
})
.catch(err=> console.log(err));