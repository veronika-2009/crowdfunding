const Sequelize = require('sequelize');
const db = require('../../server');

const Video = db.sequelize.define(
    "video",
    {
        id_video: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        video: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)
module.exports = Video;
db.sequelize.sync().then(result=>{
})
.catch(err=> console.log(err));