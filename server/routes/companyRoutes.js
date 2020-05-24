const express = require("express");
const users = express.Router();
const Image = require("../models/ImageModel");
const Video = require("../models/VideoModel");
const Company = require("../models/Model");
const cloudinary = require("cloudinary").v2;


process.env.SECRET_KEY = 'secret';
cloudinary.config({
    cloud_name: 'site1',
    api_key: '682213162769324',
    api_secret: '6j3sGiCQbU3kESqYhEJyWxYE4LA',
});
users.post("/saveNewCompany/:id", function (req, res, next) {
    const id = req.params.id
    const nameCompany = req.body.values.nameCompany;
    const tag = req.body.values.tag;
    const shortDescription = req.body.values.shortDescription;
    const money = req.body.values.money;
    const days = req.body.values.days;
    Company.create({
        nameCompany: nameCompany, many: money, newUserId: id,
        short_description: shortDescription,
        tag: tag,
        days: days
    }).then((data) => {
        const id = data.id
        return res.json({ id: id })
    }).catch(err => console.log(err));
})
users.post("/saveDescription/:id", function (req, res, next) {
    const description = req.body.value;
    const id = req.params.id
    Company.update({ description: description }, { where: { id: id } }).then(() => {
        return res.sendStatus(200);
    }).catch(err => console.log(err));
})
users.post("/upload/:id", function (req, res, next) {
    const file = req.files.file
    const id = req.params.id
    cloudinary.uploader.upload(file.tempFilePath, function (req, result) {
        res.send({
            success: true,
            result
        })
        const image = result.url
        Image.create({ link_image: image, id: id }).then(() => {
            return next();
        }).catch(err => console.log(err));
    })
})
users.post("/editImage/:id", function (req, res, next) {
    if (!req.files) return "no modified photo"
    const file = req.files.file
    const id = req.params.id
    cloudinary.uploader.upload(file.tempFilePath, function (req, result) {
        res.send({
            success: true,
            result
        })
        const image = result.url
        Image.update({ link_image: image }, { where: { id: id } }).then(() => {
            return next();
        }).catch(err => console.log(err));
    })
})
users.post("/uploadVideo/:id", function (req, res) {
    if (!req.body) return res.sendStatus(400);
    const id = req.params.id
    const video = req.body.videoUrl;
    Video.create({ video: video, id: id }).then(() => {
        return res.sendStatus(200);
    }).catch(err => console.log(err));
});
users.post("/createCompany", function (req, res, next) {
    if (!req.body) return res.sendStatus(400);
    const nameCompany = req.body.values.nameCompany;
    const shortDescription = req.body.values.shortDescription;
    Company.create({ nameCompany: nameCompany, short_description: shortDescription }).then(() => {
        return res.sendStatus(200);
    }).catch(err => console.log(err));
});
users.post("/remove/:id", function (req, res) {
    const id = req.params.id;
    Company.destroy({ where: { id: id } }).then((response) => {
        return res.sendStatus(200);
    })
        .catch(err => console.log(err));
});
module.exports = users;
