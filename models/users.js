//Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema for user DB
const userSchema = Schema({
  username: String,
  password: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
