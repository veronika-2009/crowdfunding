const express = require('express');
const users = express.Router();
const Model = require('../models/Model');
const cloudinary = require('cloudinary').v2
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
    cloud_name: 'site1',
    api_key: '682213162769324',
    api_secret: '6j3sGiCQbU3kESqYhEJyWxYE4LA',
});

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
        //     Model.create({ nameCompany: image}).then(() => {
        //       return res.sendStatus(200);
        //   }).catch(err => console.log(err));
    })
})
users.post("/uploadVideo/", function (req, res) {
    if (!req.body) return res.sendStatus(400);
    const link = req.body.videoUrl;
    console.log(link)
    Model.create({ link: link }).then(() => {
        return res.sendStatus(200);
    }).catch(err => console.log(err));
});

users.get("/myCabinet/", (req, res) => {
    Model.findAll()
        .then((respone) =>
            res.send(respone))
});

users.get("/editCompany/:id", (req, res) => {
    const id = req.params.id;
    Model.findAll({ where: { id: id } })
        .then((respone) =>
            res.send(respone))
});

users.post("/createCompany/", function (req, res) {
    if (!req.body) return res.sendStatus(400);
    const nameCompany = req.body.nameCompany;
    const description = req.body.description;
    const tag = req.body.tag;
    Model.create({ nameCompany: nameCompany, description: description, tag: tag }).then(() => {
        return res.sendStatus(200);
    }).catch(err => console.log(err));
});


module.exports = users;
