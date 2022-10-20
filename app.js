const express = require('express');
const app = express();

app.use('/', (req, res) => {
    res.send('Welcome to my website!');
});

app.listen(process.env.NODE_ENV)