const express = require("express");
const cors = require ("cors");
const bodyParser = require ("body-parser");
const app = express();
var Sequelize = require("sequelize");
var cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const path = require("path");


var db ={}
var sequelize = new Sequelize('heroku_3d322cb1144a021','b7dd8f543e5f58', '5833cb15', {
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
var PORT = process.env.PORT || 4000
app.use(fileUpload({useTempFiles:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());
app.use(cookieParser())
const routes = require('./server/routes/companyRoutes');
app.use('/', routes);
routes.use('/login', require('./server/routes/loginRoutes'));
routes.use('/', require('./server/routes/editRoutes'));
routes.use('/', require('./server/routes/displayRoutes'));
routes.use('/', require('./server/routes/AdminPanel'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
sequelize.sync().then(()=>{
  app.listen(PORT, function(){
    console.log("Example app listening on port 4000!");
  });
}).catch(err=>console.log(err));