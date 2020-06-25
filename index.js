const express = require('express');
const tests = require('./tests');
const app = express();

const PORT = 3001;

app.use(express.urlencoded())

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get('/', (req, res) => {
  res.send('hello');
});

app.use('/tests', tests);

app.use((err, req, res, next) => {
  err && console.log(err);
  next();
})

app.listen(PORT, err => err ? console.error(err) : console.log('Server started'));
