const Song = require('../models/song');

const handleError = (res, error) => {
  res.status(500).json({ error });
};

const getSongs = (req, res) => {
  Song.find()
    .sort({ rank: 1 })
    .then((songs) => {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // для работы api с cyclic и запросов с react
      res.status(200).json(songs);
    })
    .catch((err) => handleError(res, err));
};

const getSong = (req, res) => {
  Song.findById(req.params.id)
    .then((song) => {
      res.status(200).json(song);
    })
    .catch((err) => handleError(res, err));
};

const deleteSong = (req, res) => {
  Song.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => handleError(res, err));
};

const addSong = (req, res) => {
  const song = new Song(req.body);
  song
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => handleError(res, err));
};

const updateSong = (req, res) => {
  Song.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => handleError(res, err));
};

module.exports = {
  getSongs,
  getSong,
  deleteSong,
  addSong,
  updateSong,
};
