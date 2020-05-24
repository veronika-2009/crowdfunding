const express = require("express");
const User = require("../models/UsersModel");
const Role = require("../models/RolesModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const login = express.Router();


login.post("/register", (req, res) => {
    const userData = {
        roles: [{
            roles: "user"
        }],
        login: req.body.login,
        password: req.body.password,
        email: req.body.email,
        name: req.body.name
    }
    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(data => {
            if (!data) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    User.create(userData, { include: [{ model: Role, as: "roles" }] })
                        .then(data => {
                            res.json({ status: data.email + "register" })
                        })
                        .catch(err => {
                            res.send("error" + err)
                        })
                })
            } else {
                res.json({ error: "Usee already exist" })
            }
        })
        .catch(err => {
            res.send("error:" + err)
        })
})
login.post("/login", (req, res) => {
    User.findAll({
        where: {
            email: req.body.email

        }, include: [{
            model: Role
        }]
    })
        .then(data => {
            console.log(data)
            const role = data[0].roles[0].roles;
            const dataValue = data[0].dataValues;
            const newUserId = data[0].newUserId;
            const name = data[0].name;
            if (data) {
                if (bcrypt.compareSync(req.body.password, data[0].password)) {
                    let token = jwt.sign({ dataValue, role }, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send({
                        token,
                        role,
                        newUserId,
                        name
                    })
                }
            } else {
                res.sendStatus(400).json({ error: "User does not exist" })
            }
        })
        .catch(err => {
            res.sendStatus(400).json({ error: err })
        })
})
module.exports = login;