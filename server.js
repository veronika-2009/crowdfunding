const express = require('express');
const cors = require ('cors');
const bodyParser = require ('body-parser');
const app = express();
var Sequelize = require('sequelize');
var cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');


var db = {}
var sequelize = new Sequelize('users', 'root', 'mc1982118', {
    host: 'localhost',
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
app.use(require('serve-static')(__dirname + '/../../public'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));

sequelize.sync().then(()=>{
  app.listen(port, function(){
    console.log("Example app listening on port 4000!");
  });
}).catch(err=>console.log(err));