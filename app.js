const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.use('/', (req, res) => {
    res.send('Welcome to my website!');
});

app.listen(port)