const express = require('express');
const { Comment } = require('../models/comment');
const router = express.Router();

// route functions
const newComment = async (req, res) => {
    try {
        const comment = new Comment(req.body);
        await comment.save();
        return res.status(201).send('comment posted successfully');
    } catch(err) {
        return res.status(400).send('something went wrong');
    }
}

const commentlist = async (req, res) => {
    const comments = await Comment.find();
    return res.status(200).send(comments);
}

const deleteComment = async (req, res) => {
    try {
        await Comment.deleteOne({_id: req.params.id});
        return res.status(202).send('deletion successful');
    } catch(err) {
        return res.status(400).send('something went wrong');
    }
    
}

router.route('/')
    .get(commentlist)
    .post(newComment);

router.route('/:id')
    .delete(deleteComment);

module.exports = router;