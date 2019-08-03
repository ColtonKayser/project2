const express = require('express');
const sessions = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

sessions.get('/new', (req, res) => {
  res.render('sessions/new.ejs')
});

sessions.post('/', (req, res) => {
  User.findOne({ username: req.body.username}, (err, foundUser) => {
    if (err) {
      console.log(err);
      res.send('db has issue');
    } else if (!foundUser) {
      res.send('<a href="/">User Not Found</a>');
    } else {
      if ( bcrypt.compareSync (req.body.password, foundUser.password)) {
        req.session.currentUser = foundUser;
        res.redirect('/app');
      } else {
        res.send('<a href="/"> Wrong Password</a>');
      }
    }
  });
});

sessions.delete('/', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

module.exports = sessions;
