const express = require('express');
const users = express.Router();
const Model = require('../models/Model');




users.post("/createCompany/",  function (req, res) {
    if(!req.body) return res.sendStatus(400); 
    const nameCompany = req.body.nameCompany;
    const description = req.body.description;
    const tag = req.body.tag;
    Model.create({ nameCompany: nameCompany, description: description, tag: tag}).then(()=>{
        return res.sendStatus(200);
    }).catch(err=>console.log(err));
});



module.exports = users;
