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
let routes = require('./server/routes/routes');
app.use('/', routes);
app.use(require('serve-static')(__dirname + '/../../public'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));



sequelize.sync().then(()=>{
  app.listen(port, function(){
    console.log("Example app listening on port 4000!");
  });
}).catch(err=>console.log(err));
// http://localhost:4000/callbackGitHub
// Client ID
// 3ddb089b13313937c81f
// Client Secret
// 3e408c6a804c9c2de8561369dff64ff9af31cf8b
//id 58051511028-3avvt4ovho56p2ll4p9s57fhg99du3rp.apps.googleusercontent.com
//secret j5MoPGdZ11yXNqdC73OOvGdD