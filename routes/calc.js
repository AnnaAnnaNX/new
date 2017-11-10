var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.post('/', function(req, res, next) {

  res.render('calc', { title: 'Results' });
});

module.exports = router;
