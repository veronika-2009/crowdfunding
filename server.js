const express = require('express');
const cors = require ('cors');
const bodyParser = require ('body-parser');
const app = express();
var Sequelize = require('sequelize');
var cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
// const multer = require('multer');
// const uploads = multer({dest:'uploads/'});
// var cloudinary = require('cloudinary').v2;

var db = {}

var sequelize = new Sequelize('heroku_3d322cb1144a021', 'b7dd8f543e5f58', '5833cb15', {
    host: 'us-cdbr-iron-east-01.cleardb.net',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max:5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db
var port = process.env.PORT || 4000

// app.use(uploads.any());
app.use(fileUpload({useTempFiles:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());
app.use(cookieParser())
let routes = require('./server/routes/routes');
app.use('/', routes);


sequelize.sync().then(()=>{
  app.listen(port, function(){
    console.log("Example app listening on port 4000!");
  });
}).catch(err=>console.log(err));