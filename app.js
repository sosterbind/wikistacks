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

// const { db, User, Page } = require('./models');
// db.authenticate().
// then(() => {
//   console.log('connected to the database');
// })

const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');
app.use('/wiki', wikiRouter);


const models = require('./models');

const init = async () => {
  await models.User.sync()
  await models.Page.sync()

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}

app.get('/', (req, res, next) => {
  res.redirect('/wiki');
})

const PORT = 3000;
init();





