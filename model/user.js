const mongoose = require('mongoose');

//creation schema utilisateur

var userSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    email: String,
});

//creation model

module.exports = mongoose.model('user', userSchema)