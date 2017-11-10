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
      photo = 'front';

  if (fs.existsSync('scale.json')){
    console.log('scale.json exists');
    data = fs.readFileSync('scale.json', 'utf8');

    if ( data == '' ){
      console.log('scale.json empty');
    }
    else{
      console.log('scale.json doesnt empty');
      data = fs.readFileSync('scale.json', 'utf8');
      data = JSON.parse(data);
      x1 = data.points[0].x,
      y1 = data.points[0].y,
      x2 = data.points[1].x,
      y2 = data.points[1].y,
      photo = data.photo[0].photo;
    }
}

  res.render('input-scale-points', { title: 'input scale points', x1: x1, y1: y1, x2: x2, y2: y2, photo: photo });
});

module.exports = router;
