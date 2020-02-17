const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>How are you doing?</h1>');
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
