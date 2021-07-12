const mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    password: {type: String},
    country: {type: String},
    zipcode: {type: Number},
    dateOfBirth: {type: Date},
    favorite: {type: String},
    settings: {type: Object}
});

mongoose.model('user', userSchema);