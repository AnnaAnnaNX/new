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
      y3 = '';

  if (fs.existsSync('pointsTop.json')){
    console.log('pointsTop.json exists');
    data = fs.readFileSync('pointsTop.json', 'utf8');

    if ( data == '' ){
      console.log('pointsTop.json empty');
    }
    else{
      console.log('pointsTop.json doesnt empty');
      data = fs.readFileSync('pointsTop.json', 'utf8');
      data = JSON.parse(data);
      x1 = data.points[0].x,
      y1 = data.points[0].y,
      x2 = data.points[1].x,
      y2 = data.points[1].y,
      x3 = data.points[2].x,
      y3 = data.points[2].y;
    }
}

  res.render('input-top-points', { title: 'input points on top photo', x1: x1, y1: y1, x2: x2, y2: y2, x3: x3, y3: y3 });
});

module.exports = router;
