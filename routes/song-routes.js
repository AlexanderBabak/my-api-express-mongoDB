const express = require('express');

const {
  getSongs,
  getSong,
  deleteSong,
  addSong,
  updateSong,
} = require('../controllers/song-controller');

const router = express.Router();

router.get('/api/songs', getSongs);
router.get('/api/songs/:id', getSong);
router.delete('/api/songs/:id', deleteSong);
router.post('/api/songs', addSong);
router.patch('/api/songs/:id', updateSong);

module.exports = router;
