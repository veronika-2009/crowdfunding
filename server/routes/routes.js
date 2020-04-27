const express = require('express');
const users = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Model = require('../models/Model');

process.env.SECRET_KEY = 'secret';


users.post("/createCompany/",  function (req, res) {
    if(!req.body) return res.sendStatus(400); 
    const nameCompany = req.body.nameCompany;
    const description = req.body.description;
    const tag = req.body.tag;
    Model.create({ nameCompany: nameCompany, description: description, tag: tag}).then(()=>{
        return res.sendStatus(200);
    }).catch(err=>console.log(err));
});



users.post('/createCompanys/', (req, res) => {
    const userData = {
        nameCompany: req.body.nameCompany,
        description: req.body.description,
        tag: req.body.tag
    }
    Model.findOne({
        where: {
            nameCompany: req.body.nameCompany
        }
    }).then(data => {
            if (data) {
                    Model.create(userData)
                        .then(data => {
                            res.json({ status: data.email + 'createCompany' })
                            
                        })
                        .catch(err => {
                            res.send('error' + err)
                        })
            } else {
                res.json({ error: 'Company already exist' })
            }
        })
        .catch(err => {
            res.send('error:' + err)
        })
})




users.post('/login', (req, res) => {
    Model.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(data => {
            if (data) {
                if (bcrypt.compareSync(req.body.password, data.password)) {
                    let token = jwt.sign(data.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send(token)
                }
            } else {
                res.status(400).json({ error: 'User does not exist' })
            }
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
})

module.exports = users;
