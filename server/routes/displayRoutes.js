const express = require('express');
const display = express.Router();
const Image = require('../models/ImageModel');
const Video = require('../models/VideoModel');
const Company = require('../models/Model');


display.get("/myCabinet/", (req, res) => {
    Company.findAll({ include: [{ model: Image }, { model: Video }] })
        .then((respone) =>
            res.send(respone))
});
display.get("/myPersonalCabinet/:id", (req, res) => {
    const id = req.params.id;
    Company.findAll({ where: { newUserId: id }, include: [{ model: Image }, { model: Video }] })
        .then((respone) =>
            res.send(respone))
});
display.get("/lookCompany/:id", (req, res) => {
    const id = req.params.id;
    Company.findAll({ where: { id: id }, include: [{ model: Image }, { model: Video }] })
        .then((respone) =>
            res.send(respone))
});
display.get("/lookImage/:id", (req, res) => {
    const id = req.params.id;
    Image.findAll({ where: { id: id } })
        .then((respone) =>
            res.send(respone))
});
display.get("/lookVideo/:id", (req, res) => {
    const id = req.params.id;
    Video.findAll({ where: { id: id } })
        .then((respone) =>
            res.send(respone))
});
module.exports = display;