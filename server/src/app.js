// npm packages
import express from 'express';
import bodyParser from 'body-parser'
// init app
const app = express();

// add body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true})); // for parseing application/x-www-form-urlencoded

// test method
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// catch all unhandler errors
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send(err);
});
// esport app
export default app;
