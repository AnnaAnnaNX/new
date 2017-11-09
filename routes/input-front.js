var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var data = {};

  console.log('input route');

  data = fs.readFileSync('points.json', 'utf8');

  data = JSON.parse(data); //now it an object
  console.log('readed dates');
  console.log(data);
  data.points.push({x: 2, y:3}); //add some data
  json = JSON.stringify(data); //convert it back to json
  fs.writeFileSync('points.json', json, 'utf8');



  var x1 = data.points[0].x || '',
      y1 = data.points[0].y || '',
      x2 = data.points[1].x || '',
      y2 = data.points[1].y || '',
      x3 = data.points[2].x || '',
      y3 = data.points[2].y || '';

  res.render('input-front', { title: 'input front', x1: x1, y1: y1, x2: x2, y2: y2, x3: x3, y3: y3 });

});

module.exports = router;
