const express = require('express');

const router = express.Router();

router.get("/users/", (req, res, next) => {
  res.send('got to GET users')
});

router.get("/users/123/", (req, res, next) => {
  res.send('got to GET users')
});

router.post("/users/123/", (req, res, next) => {
  res.send('got to POST users')
});

router.put("/users/123/", (req, res, next) => {
  res.send('got to PUT users')
});

router.delete("/users/123/", (req, res, next) => {
  res.send('got to DELETE users')
});

module.exports = router;