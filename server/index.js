const cors = require('cors');
const express = require('express');
const NewsAPI = require('newsapi');

const newsapi = new NewsAPI('3f5327868c864717b2bbddadb2f458c0');

const app = express();
const port = 5000;

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.get('/', async (req, res) => {
  try {
    const data = await newsapi.v2.everything({
      q: req.query.keyword,
      language: 'en',
      sortBy: req.query.sort,
      page: 1
    });
    res.json(data.articles);
  } catch (e) {
    res.json(data.message);
  }
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})