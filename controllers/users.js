const express = require('express');
const users = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

//new route for users
users.get('/new', (req, res) => {
  res.render('users/new.ejs')
});

//post route for users
users.post('/', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  User.create(req.body, (err, createdUser) => {
    if (err) {
      console.log(err);
    } else {
      console.log(createdUser);
      res.redirect('/app');
    }
  });
});

module.exports = users;
