const express = require('express');
const sessions = express.Router();
const User = require('../models/users.js');

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
      if (req.body.password == foundUser.password) {
        req.session.currentUser = foundUser;
        res.redirect('/');
      } else {
        res.send('<a href="/"> Wrong Password</a>');
      }
    }
  })
})
module.exports = sessions;
