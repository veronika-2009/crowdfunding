const express = require("express");
const admin = express.Router();
const User = require("../models/UsersModel");
const Roles = require("../models/RolesModel");
const Company = require("../models/Model");


admin.get("/usersList", (req, res) =>
    User.findAll({ include: [{ model: Roles }, { model: Company }] })
        .then((response) =>
            res.send(response))
);
admin.post("/delete/:id", function (req, res) {
    const id = req.params.id;
    console.log(req)
    User.destroy({ where: { newUserId: id } }).then((response) => {
        return res.sendStatus(200);
    })
        .catch(err => console.log(err));
});
admin.post("/assignAdmin/:id", function (req, res) {
    const id = req.params.id;
    Roles.update({ roles: "admin" }, { where: { roleId: id } }).then((response) => {
        return res.sendStatus(200);
    })
        .catch(err => console.log(err));
});
admin.post("/assignUser/:id", function (req, res) {
    const id = req.params.id;
    Roles.update({ roles: "user" }, { where: { roleId: id } }).then((response) => {
        return res.sendStatus(200);
    })
        .catch(err => console.log(err));
});
module.exports = admin;