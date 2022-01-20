const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.static('public'));

app.get('/api/words', (req, res) => {
  
  const words = [
    {
      content: 'array',
      category: 'javascript'
    },
    {
      content: 'text-align',
      category: 'css'
    },
    {
      content: 'destructuring',
      category: 'javascript'
    }
  ];

  res.json(words);
});

app.listen(PORT, () => {
  console.log(`[server:] ⚡️ server listening on port ${ PORT }`)
});