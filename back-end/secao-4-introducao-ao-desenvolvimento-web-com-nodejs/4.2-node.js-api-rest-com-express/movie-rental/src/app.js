const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());

const moviesPath = path.resolve(__dirname, './movies.json');

const readMovies = async () => {
  try {
  const data = await fs.readFile(moviesPath, 'utf-8');
  const movies = JSON.parse(data);
  return movies;
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
};

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await readMovies();

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return res.status(404).json({ message: 'Filme não encontrado' });
  }

  return res.status(200).json({ movie });
});

module.exports = app;
