// npm packages
import express from 'express';
import bodyParser from 'body-parser'
import morgan from 'morgan';
import {logger} from './util';

// init app
const app = express();
// setup logging
app.use(morgan('combined', {stream: logger.stream}));
// add body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true})); // for parseing application/x-www-form-urlencoded
// test method
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// catch all unhandler errors
app.use((err, req, res) => {
  logger.error(err.stack);
  res.status(500).send(err);
});
// esport app
export default app;
