const express = require('express');// parses url-encoded bodies


const morgan = require('morgan');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

const layout = require('./views/layout');

app.get("/", (req, res) => {
  res.send(layout(''));
})

const { db } = require('./models');
db.authenticate().
then(() => {
  console.log('connected to the database');
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

