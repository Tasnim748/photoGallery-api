const { Schema, model } = require('mongoose');

const commentSchema = Schema({
    author: String,
    photoId: String,
    comment: String,
    datetime: String
});

module.exports.Comment = model('Comment', commentSchema);