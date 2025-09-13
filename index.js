const express = require('express');

const app = express();

require('dotenv').config();

const data = require('./data/sample.json');
const connectDB = require('./config/db_config');
const User = require('./models/user');

connectDB();

app.get('/', (req, res) => {
    res.send('kanikasrinivasan lead data anlayst in  zoho');
});

app.get('/about', (req, res) => {
    res.json(data);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});
