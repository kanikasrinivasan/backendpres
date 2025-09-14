const data = require('./data/sample.json');
const connectDB = require('./config/db_config');
const User = require('./models/user');
const userRoutes = require('./routes/user');
require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

connectDB();
app.use('/api/users', userRoutes);


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
    const fs = require('fs');
    const path = require('path');//port 3009 for viewing json 
    const user = require('./models/user');
});
