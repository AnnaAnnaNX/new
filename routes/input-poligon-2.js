var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var data = {};
  var x1 = '',
      y1 = '',
      x2 = '',
      y2 = '',
      x3 = '',
      y3 = '',
      x4 = '',
      y4 = '',
      x5 = '',
      y5 = '';

  if (fs.existsSync('poligon2.json')){
    console.log('poligon2.json exists');
    data = fs.readFileSync('poligon2.json', 'utf8');

    if ( data == '' ){
      console.log('poligon2.json empty');
    }
    else{
      console.log('poligon2.json doesnt empty');
      data = fs.readFileSync('poligon2.json', 'utf8');
      data = JSON.parse(data);
      x1 = data.points[0].x,
      y1 = data.points[0].y,
      x2 = data.points[1].x,
      y2 = data.points[1].y,
      x3 = data.points[2].x,
      y3 = data.points[2].y,
      x4 = data.points[3].x,
      y4 = data.points[3].y,
      x5 = data.points[4].x,
      y5 = data.points[4].y;
    }
}

  res.render('input-poligon-2', { title: 'input poligon #1', x1: x1, y1: y1, x2: x2, y2: y2, x3: x3, y3: y3, x4: x4, y4: y4, x5: x5, y5: y5 });
});

module.exports = router;
