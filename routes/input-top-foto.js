var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var haveFoto = false;
  if (fs.existsSync('./public/images/front-foto')){
    haveFoto = true;
  }
  res.render('input-top-foto', { title: 'Input top foto', haveFoto: haveFoto});
});

module.exports = router;
