//Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema for Games DB
const gameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  console: { type: String },
  year: { type: String },
  img: { type: String },
  notes: { type: String },
  action: Boolean,
  puzzle: Boolean,
  rpg: Boolean,
  sports: Boolean
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
