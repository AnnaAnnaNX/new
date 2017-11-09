var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {

  if (fs.existsSync('./public/images/front-foto')){
    fs.unlinkSync('./public/images/front-foto');
    console.log('successfully deleted /public/images');
  }

  res.render('input-front-foto', { title: 'Input front foto'});
});

module.exports = router;
