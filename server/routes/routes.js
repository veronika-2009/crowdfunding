const express = require('express');
const users = express.Router();
const Model = require('../models/Model');


users.get("/myCabinet/", (req, res) =>{
    // const cookies = res.nameCompany
    // console.log(res.cookie('cookiename',  {cookies}));
    Model.findAll()
    .then((respone) => 
    res.send(respone))
});

users.get("/editCompany/:id", (req, res) =>{
    const id = req.params.id;
    Model.findAll({ where: { id: id } })
    .then((respone) => 
    res.send(respone))
});

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
