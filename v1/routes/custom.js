// routes/custom.js
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('custom', { title: 'Express' });
});

module.exports = router;