const express = require('express');
const cors = require ('cors');
const bodyParser = require ('body-parser');
const app = express();
var Sequelize = require('sequelize');
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


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());


let routes = require('./server/routes/routes');
app.use('/', routes)

sequelize.sync().then(()=>{
  app.listen(port, function(){
    console.log("Example app listening on port 4000!");
  });
}).catch(err=>console.log(err));
// app.listen(port, function () {
//   console.log('Example app listening on port 4000!');
//  });