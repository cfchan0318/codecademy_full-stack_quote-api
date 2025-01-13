const express = require('express');
const router = express.Router();

const quotesRouter = require('./quotes.routes');

router.use('/quotes', quotesRouter);

module.exports = router;
