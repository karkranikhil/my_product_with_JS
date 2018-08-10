// npm packages
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import {logger} from './utils';

// init app
const app = express();
// setup logging
app.use(morgan('combined', {stream: logger.stream}));
// add body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parseing application/x-www-form-urlencoded
// test method
app.get('/', (req, res) => {
  res.send('Hello world!');
});
// login method
app.post('/login', (req, res) => {
  const {username, password} = req.body;
  if (username === 'test' && password === '123') {
    res.send({username, id: 1});
    return;
  }
  res.status(401).send({error: 'Incorrect username or password'});
});

// catch all unhandler errors
app.use((err, req, res) => {
  logger.error(err.stack);
  res.status(500).send(err);
});
// esport app
export default app;
