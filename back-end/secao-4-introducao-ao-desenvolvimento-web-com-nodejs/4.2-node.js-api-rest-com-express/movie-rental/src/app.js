const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();

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

module.exports = app;
