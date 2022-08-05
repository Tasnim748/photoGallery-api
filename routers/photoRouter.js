const exp = require('constants');
const express = require('express');
const { Photo } = require('../models/photo');
const router = express.Router();

const newPhoto = async (req, res) => {
    try {
        const photo = new Photo(req.body);
        await photo.save();
        const thePhoto = await Photo.findOne({filePath: photo.filePath});
        return res.status(201).send(thePhoto._id);
    } catch(err) {
        return res.status(400).send('something went wrong');
    }
}

const photoList = async (req, res) => {
    const photos = await Photo.find();
    return res.status(200).send(photos);
}

router.route('/')
    .get(photoList)
    .post(newPhoto)

module.exports = router;