var express = require('express');
var router = express.Router();
var fs = require('fs');
var multer = require('multer');
var upload = multer({ dest: './public/images/' });

/* GET users listing. */
router.post('/', upload.any({ name: 'top' }), function(req, res, next) {
  var data = {};
    fs.rename('./public/images/'+req.files[0].filename, './public/images/top-foto', function (err) {
    if (err) throw err;
    console.log('renamed complete');
  });

  //res.render('submit-top-foto', { title: 'Submit top foto'});
  //res.send( req.files );
  res.redirect('/');
});

module.exports = router;
