const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const app = require('./app');
dotenv.config()

const DB_URL = process.env.MONGODB_SERVER.replace('<password>', process.env.CLUSTER_PASSWORD);
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('connected to server successfully!'))
    .catch((err) => console.log('connection failed :('));

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})

