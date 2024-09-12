import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('The date is', new Date());
  next();
});
app.get('/', (req, res) => {
  res.send('This is for GET /');
});
app.get('/notes', (req, res) => {
  res.send('This is for GET/notes');
});
app.post('/notes/123', (req, res) => {
  res.send('This is for POST/notes/123');
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
