const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
     first_name: String,
        last_name: String,
        dob: String,
        email: String,
        phone: String,
        city: String,
        company: String,
        role: String,
        location: String
});
module.exports = mongoose.model('User', userSchema);