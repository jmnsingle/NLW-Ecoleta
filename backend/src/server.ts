import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.send('Olá mundo');
});

app.listen(3333, () => {
  return console.log('Server runing on port: 3333');
});