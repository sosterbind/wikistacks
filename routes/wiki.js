const express = require('express');

const router = express.Router();
const { Page } = require("../models");
const {addPage} = require('../views');

module.exports = router;

router.get("/", (req, res, next) => {
  res.send('got to GET /wiki/')
});

router.post('/', async (req, res, next) => {
  console.log('body', req.body)
  const title = req.body.title;
  const content = req.body.content;

  const page = new Page({
    title: title,
    content: content
  });

  try {
    await page.save();
    res.redirect('/');
  } catch (error) { next(error) }
});
  

router.get("/add", (req, res, next) => {
  res.send(addPage());
});
