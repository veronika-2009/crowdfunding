const express = require('express');
const users = express.Router();
const Image = require('../models/ImageModel');
const Video = require('../models/VideoModel');
const Company = require('../models/Model');
const User = require('../models/UsersModel');
const cloudinary = require('cloudinary').v2;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

process.env.SECRET_KEY = 'secret';

cloudinary.config({
    cloud_name: 'site1',
    api_key: '682213162769324',
    api_secret: '6j3sGiCQbU3kESqYhEJyWxYE4LA',
});

users.post('/saveNewCompany', function (req, res, next) {
    console.log(req.body)
    const nameCompany = req.body.values.nameCompany;
    const tag = req.body.values.tag;
    const shortDescription = req.body.values.shortDescription;
    const money = req.body.values.money;
    const days = req.body.values.days;
    Company.create({
        nameCompany: nameCompany, many: money,
        short_description: shortDescription, tag: tag, days: days
    }).then((data) => {
        const id = data.id
        console.log(id)
        return res.json({ id: id })
    }).catch(err => console.log(err));
})
users.post('/saveDescription/:id', function (req, res, next) {
    const description = req.body.value;
    const id = req.params.id
    console.log(req.body)
    Company.update({ description: description }, { where: { id: id } }).then(() => {
        return res.sendStatus(200);
    }).catch(err => console.log(err));
})
users.post('/saveEditDescription/:id', function (req, res, next) {
    const description = req.body.updateTextMarkdown;
    const id = req.params.id
    console.log(description)
    Company.update({ description: description }, { where: { id: id } }).then(() => {
        return res.sendStatus(200);
    }).catch(err => console.log(err));
})
users.post('/upload/:id', function (req, res, next) {
    console.log(req.files.file)
    const file = req.files.file
    const id = req.params.id
    cloudinary.uploader.upload(file.tempFilePath, function (req, result) {
        res.send({
            success: true,
            result
        })
        const image = result.url
        console.log(image)
        Image.create({ link_image: image, id: id }).then(() => {
            return next();
        }).catch(err => console.log(err));
    })
})
users.post('/editImage/:id', function (req, res, next) {
    if (!req.files) return 'no modified photo'
    console.log(req.files.file)
    const file = req.files.file
    const id = req.params.id
    cloudinary.uploader.upload(file.tempFilePath, function (req, result) {
        res.send({
            success: true,
            result
        })
        const image = result.url
        console.log(image)
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
users.post("/editVideo/:id", function (req, res) {
    if (!req.body) return res.sendStatus(400);
    const id = req.params.id;
    const video = req.body.videoNewURL;
    Video.update({ video: video }, { where: { id: id } }).then(() => {
        return res.sendStatus(200);
    }).catch(err => console.log(err));
});

users.get("/myCabinet/", (req, res) => {
    Company.findAll({ include: [{ model: Image }, { model: Video }] })
        .then((respone) =>
            res.send(respone))
});

users.get("/lookCompany/:id", (req, res) => {
    const id = req.params.id;
    Company.findAll({ where: { id: id }, include: [{ model: Image }, { model: Video }] })
        .then((respone) =>
            res.send(respone))
});

users.get("/lookImage/:id", (req, res) => {
    const id = req.params.id;
    Image.findAll({ where: { id: id } })
        .then((respone) =>
            res.send(respone))
});
users.get("/lookVideo/:id", (req, res) => {
    const id = req.params.id;
    Video.findAll({ where: { id: id } })
        .then((respone) =>
            res.send(respone))
});

users.get("/editCompany/:id", (req, res) => {
    const id = req.params.id;
    Company.findAll({ where: { id: id }, include: [{ model: Image }, { model: Video }] })
        .then((respone) =>
            res.send(respone))
});

users.post("/createCompany", function (req, res, next) {
    if (!req.body) return res.sendStatus(400);
    console.log(req.body)
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

users.put("/editCompany/:id", function (req, res) {
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

users.post('/register', (req, res) => {
    const today = new Date()
    const userData = {
        login: req.body.login,
        password: req.body.password,
        email: req.body.email,
        date_reg: req.body.date_reg,
        date_author: today,
        status: req.body.status
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
                    User.create(userData)
                        .then(data => {
                            res.json({ status: data.email + 'register' })
                        })
                        .catch(err => {
                            res.send('error' + err)
                        })
                })
            } else {
                res.json({ error: 'Usee already exist' })
            }
        })
        .catch(err => {
            res.send('error:' + err)
        })
})

users.post('/login', (req, res) => {
    User.findOne({
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
