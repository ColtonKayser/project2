//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
const session = require('express-session');
// const Game = require('./models/games.js');
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Fix Depreciation Warnings from Mongoose*
// May or may not need these depending on your Mongoose version
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true});

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form

app.use(session({
  secret: "feedmeseymour",
  resave: false,
  saveUninitialized: false
}));


// ___________________
// Routes
// ___________________
// new Route for app
app.get('/app/new', (req, res) => {
  if (req.session.currentUser) {
    res.render('app/new.ejs')
  } else {
    res.redirect('/sessions/new');
  }
})

//create route
// app.post('/', (req, res) => {
//   if (req.body.action === 'on') {
//     req.body.action = true;
//   } else {
//     req.body.action = false;
//   }
//   if (req.body.puzzle === 'on') {
//     req.body.puzzle = true;
//   } else {
//     req.body.puzzle = false;
//   }
//   if (req.body.rpg === 'on') {
//     req.body.rpg = true;
//   } else {
//     req.body.rpg = false;
//   }
//   if (req.body.sports === 'on') {
//     req.body.sports = true;
//   } else {
//     req.body.sports = false;
//   }
//   Game.create(req.body, (error, createdGame) => {
//     res.send(createdGame);
//   });
// })


//localhost:3000 login index
app.get('/' , (req, res) => {
  res.render('index.ejs', {
    currentUser: req.session.currentUser
  });
});

///index for app
app.get('/app', (req, res) => {
  if (req.session.currentUser) {
    res.render('app/index.ejs')
  } else {
    res.redirect('/sessions/new');
  }
});

///controllers
const userController = require('./controllers/users.js');
app.use('/users', userController);

const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));
