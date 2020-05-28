const express = require("express");
const profile = express.Router();
const cloudinary = require("cloudinary").v2;
const User = require("../models/UsersModel");


process.env.SECRET_KEY = 'secret';
cloudinary.config({
    cloud_name: 'site1',
    api_key: '682213162769324',
    api_secret: '6j3sGiCQbU3kESqYhEJyWxYE4LA',
});

profile.get("/lookImageProfile/:id", (req, res) => {
    const id = req.params.id;
    User.findAll({ where: { newUserId: id }  })
        .then((respone) =>
            res.send(respone))
});
profile.post("/uploadProfileImg/:id", function (req, res, next) {
    if (!req.files) return "no modified photo"
    const file = req.files.file
    const id = req.params.id
    cloudinary.uploader.upload(file.tempFilePath, function (req, result) {
        res.send({
            success: true,
            result
        })
        const image = result.url
        User.update({ imageProfile: image }, { where: { newUserId: id } }).then(() => {
            return next();
        }).catch(err => console.log(err));
    })
})
module.exports = profile;