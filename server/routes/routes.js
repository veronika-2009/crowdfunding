const express = require('express');
const users = express.Router();
const Image = require('../models/ImageModel');
const Video = require('../models/VideoModel');
const Company = require('../models/Model');
const cloudinary = require('cloudinary').v2
// const cloudinaryStorage = require('multer-storage-cloudinary');
// const multer = require('multer');

cloudinary.config({
    cloud_name: 'site1',
    api_key: '682213162769324',
    api_secret: '6j3sGiCQbU3kESqYhEJyWxYE4LA',
});

users.post('/saveNewCompany', function (req, res, next) {
    const nameCompany = req.body.newCompany.nameCompany;
    const tag = req.body.newCompany.tag;
    const shortDescription = req.body.newCompany.shortDescription;
    const money = req.body.newCompany.money;
    const days = req.body.newCompany.days;
    Company.create({ nameCompany: nameCompany, many: money, 
        short_description: shortDescription, tag: tag, days: days }).then(() => {
        return res.sendStatus(200);
    }).catch(err => console.log(err));

})
users.post('/upload', function (req, res, next) {
    console.log(req.files.file)
    const file = req.files.file
    cloudinary.uploader.upload(file.tempFilePath, function (req, result) {
        res.send({
            success: true,
            result
        })
        const image = result.url
        console.log(image)
        Image.create({ link_image: image }).then(() => {
            return res.sendStatus(200);
        }).catch(err => console.log(err));
    })
})
users.post("/uploadVideo/", function (req, res) {
    if (!req.body) return res.sendStatus(400);
    const video = req.body.videoUrl
    Video.create({ video: video }).then(() => {
        return res.sendStatus(200);
    }).catch(err => console.log(err));
});

users.get("/myCabinet/", (req, res) => {
    Company.findAll()
        .then((respone) =>
            res.send(respone))
});

users.get("/editCompany/:id", (req, res) => {
    const id = req.params.id;
    Company.findAll({ where: { id: id } })
        .then((respone) =>
            res.send(respone))
});

users.post("/createCompany/", function (req, res) {
    if (!req.body) return res.sendStatus(400);
    const nameCompany = req.body.nameCompany;
    const description = req.body.description;
    const tag = req.body.tag;
    Company.create({ nameCompany: nameCompany, description: description, tag: tag }).then(() => {
        return res.sendStatus(200);
    }).catch(err => console.log(err));
});


module.exports = users;
