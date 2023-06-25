const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  rank: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  artist: String,
  album: String,
});

const Song = mongoose.model('Song', songSchema);
module.exports = Song;
