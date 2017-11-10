var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = {};
  //check
  var check = {
    fotoFront: false,
    fotoTop: false,
    pointsFront:false,
    pointsTop: false,
    scaleFront: false,
    scaleTop: false,
    oblWhole: false,
    obl1: false,
    obl1: false,
    obl3: false
  }

  //exist front foto
  if (fs.existsSync('./public/images/front-foto')){
    console.log('check input foto front');
    check.fotoFront = true;
  }

  //exist top foto
  if (fs.existsSync('./public/images/top-foto')){
    console.log('check input foto top');
    check.fotoTop = true;
  }

  //check input points front
  if (fs.existsSync('pointsFront.json')){
    console.log('pointsFront exists');
    data = fs.readFileSync('pointsFront.json', 'utf8');
    if ( data == '' ){
      console.log('pointsFront.json have not points');
    }
    else{
      console.log('pointsFront.json have points');
      check.pointsFront = true;
    }
  }
  else{
      console.log('pointsFront.json does not exist');
  }

  //check input points top
  if (fs.existsSync('pointsTop.json')){
    console.log('pointsTop exists');
    data = fs.readFileSync('pointsTop.json', 'utf8');
    if ( data == '' ){
      console.log('pointsTop.json have not points');
    }
    else{
      console.log('pointsTop.json have points');
      check.pointsTop = true;
    }
  }
  else{
      console.log('pointsTop.json does not exist');
  }



  res.render('index', { title: 'Main', check: check });
});

module.exports = router;
