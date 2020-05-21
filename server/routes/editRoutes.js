const express = require('express');
const edit = express.Router();
const Image = require('../models/ImageModel');
const Video = require('../models/VideoModel');
const Company = require('../models/Model');


edit.post("/editVideo/:id", function (req, res) {
    if (!req.body) return res.sendStatus(400);
    const id = req.params.id;
    const video = req.body.videoNewURL;
    Video.update({ video: video }, { where: { id: id } }).then(() => {
        return res.sendStatus(200);
    }).catch(err => console.log(err));
});
edit.post('/saveEditDescription/:id', function (req, res, next) {
    const description = req.body.updateTextMarkdown;
    const id = req.params.id
    Company.update({ description: description }, { where: { id: id } }).then(() => {
        return res.sendStatus(200);
    }).catch(err => console.log(err));
})
edit.get("/editCompany/:id", (req, res) => {
    const id = req.params.id;
    Company.findAll({ where: { id: id }, include: [{ model: Image }, { model: Video }] })
        .then((respone) =>
            res.send(respone))
});
edit.put("/editCompany/:id", function (req, res) {
    const id = req.params.id;
    const nameCompany = req.body.nameCompany;
    const tag = req.body.tag;
    const shortDescription = req.body.shortDescription;
    const money = req.body.money;
    const days = req.body.days;
    Company.update({
        nameCompany: nameCompany, many: money,
        short_description: shortDescription, tag: tag, days: days
    }, { where: { id: id } }).then((response) => {
        return res.sendStatus(200);
    })
        .catch(err => console.log(err));
});
module.exports = edit;