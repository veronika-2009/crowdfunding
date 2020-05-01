const express = require('express');
const users = express.Router();
const Model = require('../models/Model');
const cloudinary = require('cloudinary')
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');
// const upload = multer({ dest: 'uploads/' })
// const path = require("path");

cloudinary.config({
    cloud_name: 'site1',
    api_key: '682213162769324',
    api_secret: '6j3sGiCQbU3kESqYhEJyWxYE4LA',
});
var parser = multer({ 
    storage: cloudinaryStorage({
      cloudinary: cloudinary,
      folder: 'photo',
      filename: function (req, file, cb) {
        cb(undefined, file.originalname);
      }
    })
  });
  
users.post('/upload', parser.array('file'), (req, res, next) => {
    res.json("done")
    console.log(res)
  })


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
