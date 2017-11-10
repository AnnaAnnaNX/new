var express = require('express');
var router = express.Router();
var fs = require('fs');
var multer = require('multer');
var upload = multer({ dest: './public/images/' });

/* GET users listing. */
router.post('/', upload.any({ name: 'front' }), function(req, res, next) {


  if (fs.existsSync('./public/images/front-foto')){
    fs.unlinkSync('./public/images/front-foto');
    console.log('successfully deleted /public/images/front-foto');
  }

  var data = {};
    fs.rename('./public/images/'+req.files[0].filename, './public/images/front-foto', function (err) {
    if (err) throw err;
    console.log('renamed complete');
  });

  //res.render('submit-front-foto', { title: 'Submit front foto'});
  //res.send( req.files );
  res.redirect('/');
});

module.exports = router;
