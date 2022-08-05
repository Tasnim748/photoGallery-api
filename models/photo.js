const { Schema, model } = require('mongoose');

const photoSchema = Schema({
    name: String,
    uploader: String,
    filePath: String
});

module.exports.Photo = model('Photo', photoSchema);