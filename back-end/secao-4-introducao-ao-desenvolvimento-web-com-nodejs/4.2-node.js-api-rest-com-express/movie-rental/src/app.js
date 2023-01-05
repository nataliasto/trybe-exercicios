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

app.get('/movies', async (req, res) => {
  const movies = await readMovies();

  return res.status(200).json({ movies });
});

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await readMovies();

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return res.status(404).json({ message: 'Filme não encontrado' });
  }

  return res.status(200).json({ movie });
});

app.post('/movies', async (req, res) => {
  const { movie, price } = req.body;
  const movies = await readMovies();
  
  const id = movies[movies.length - 1].id + 1;
  const newMovie = {
    id,
    movie,
    price,
  };
  movies.push(newMovie);
  
  try {
    await fs.writeFile(moviesPath, JSON.stringify(movies, null, 2));
    res.status(201).json({ newMovie });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.put('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const { movie, price } = req.body;
  const movies = await readMovies();
  
  const index = movies.findIndex((m) => m.id === Number(id));
  movies[index] = {
    id: Number(id),
    movie,
    price,
  };

  try {
    await fs.writeFile(moviesPath, JSON.stringify(movies, null, 2));
    res.status(201).json(movies[index]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.delete('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await readMovies();
  const updatedMovies = movies.filter((m) => m.id !== Number(id));
  try {
    await fs.writeFile(moviesPath, JSON.stringify(updatedMovies, null, 2));
    res.status(200).end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = app;
