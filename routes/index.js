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
    scale: false,
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

  //check scale points
  if ( fs.existsSync('scale.json') ){
    console.log('scale exists');
    data = fs.readFileSync('scale.json', 'utf8');
    if ( data == '' ){
      console.log('scale.json have not points');
    }
    else{
      console.log('scale.json have points');
      check.scale = true;
    }
  }
  else{
      console.log('scale.json does not exist');
  }

  //check poligon1 points
  if ( fs.existsSync('poligon1.json') ){
    console.log('poligon1 exists');
    data = fs.readFileSync('poligon1.json', 'utf8');
    if ( data == '' ){
      console.log('poligon1.json have not points');
    }
    else{
      console.log('poligon1.json have points');
      check.poligon1 = true;
    }
  }
  else{
      console.log('poligon1.json does not exist');
  }

  //check poligon2 points
  if ( fs.existsSync('poligon2.json') ){
    console.log('poligon2 exists');
    data = fs.readFileSync('poligon2.json', 'utf8');
    if ( data == '' ){
      console.log('poligon2.json have not points');
    }
    else{
      console.log('poligon2.json have points');
      check.poligon2 = true;
    }
  }
  else{
      console.log('poligon2.json does not exist');
  }


  res.render('index', { title: 'Main', check: check });
});

module.exports = router;
