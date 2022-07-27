const { Schema, model } = require('mongoose');

const commentSchema = Schema({
    author: String,
    photoId: Number,
    comment: String,
    datetime: String
});

module.exports.Comment = model('Comment', commentSchema);