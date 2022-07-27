const express = require('express');
const cors = require('cors');
const compression = require('compression');
const commentRouter = require('./routers/commentRouter');

const app = express();

app.use(cors());
app.use(compression());
app.use(express.json());

app.use('/comments/', commentRouter);

module.exports = app;