const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;
const apiRouter = require('./routes/index.routes')

app.use('/api', apiRouter);

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`api started in port: ${PORT}`)
})