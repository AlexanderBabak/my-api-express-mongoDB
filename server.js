const express = require('express');
const mongoose = require('mongoose');
const movieRoutes = require('./routes/movie-routes');
const songRoutes = require('./routes/song-routes');
require('dotenv').config();
const chalk = require('chalk');

const errorMsg = chalk.bgKeyword('white').redBright;
const successMsg = chalk.bgKeyword('green').black;

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log(successMsg('Connected to DB')))
  .catch((err) => console.log(errorMsg(`DB connection error: ${err}`)));

// роуты перенес перед listen чтобы работал деплой на cyclic
app.use(movieRoutes);
app.use(songRoutes);

app.listen(process.env.PORT, (err) => {
  err ? console.log(err) : console.log(`listening port ${process.env.PORT}`);
});
