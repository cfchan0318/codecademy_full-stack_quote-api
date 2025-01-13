const express = require('express');
const router = express.Router();
const { getRandomElement } = require('../utils')
const { quotes } = require('../data')

router.get('/random', (req, res) => {
    const randomQuote = getRandomElement(quotes);

    const resObj = { quote: randomQuote }
    res.status(200).json(resObj)
})

router.get('/', (req, res) => {
    const person = req.query.person;
    let response = quotes;
    if (person) {
        response = quotes.filter(quote => quote.person === person)
    }

    const resObj = { quotes: response }
    res.send(resObj)
})

router.post('/', (req, res) => {
    
    const quote = req.query.quote;
    const person= req.query.person;
    if (!quote || !person) {
        res.status(400).send()
    }
    const quoteToCreate = {quote:quote, person:person}
    quotes.push(quoteToCreate)

    const resObj = { quote: quoteToCreate }
    res.status(200).json(resObj)
})

module.exports = router;