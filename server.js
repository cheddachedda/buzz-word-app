const express = require('express');
const app = express();
const PORT = 8080;

const word = require('./models/word');

// static file middleware - index.html will be served automatically if the client asks for get '/'
app.use(express.static('public'));

app.use(express.json());

app.get('/api/words', (req, res) => {
  const words = word.findMany();
  res.json(words);
});

app.post('/api/words', (req, res) => {
  const newWord = req.body;
  console.log(req.body);
  word.create(newWord);

  res.json({ message: "it's all good" });
});

app.listen(PORT, () => {
  console.log(`[server:] ⚡️ server listening on port ${ PORT }`)
});