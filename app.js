var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');

var index = require('./routes/index');
var users = require('./routes/users');
var input_front_foto = require('./routes/input-front-foto');
var submit_front_foto = require('./routes/submit-front-foto');
var input_top_foto = require('./routes/input-top-foto');
var submit_top_foto = require('./routes/submit-top-foto');
var input_front_points = require('./routes/input-front-points');
var submit_front_points = require('./routes/submit-front-points');
var input_top_points = require('./routes/input-top-points');
var submit_top_points = require('./routes/submit-top-points');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


var obj = {
  points:[]
};
/*
obj.points.push({x:1,y:1});

var json = JSON.stringify(obj);
fs.writeFileSync('points.json',json,'utf8');
console.log(json);


fs.readFile('points.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
    obj = JSON.parse(data); //now it an object
    console.log('readed dates');
    console.log(data);
    obj.points.push({id: 2, square:3}); //add some data
    json = JSON.stringify(obj); //convert it back to json
    fs.writeFile('points.json', json, 'utf8'); // write it back
}});
*/
var readMe = fs.readFileSync('readMe.text','utf8');
console.log(readMe);



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', index);
app.use('/users', users);
app.use('/input-front-foto', input_front_foto);
app.use('/submit-front-foto', submit_front_foto);
app.use('/input-top-foto', input_top_foto);
app.use('/submit-top-foto', submit_top_foto);
app.use('/input-front-points', input_front_points);
app.use('/submit-front-points', submit_front_points);
app.use('/input-top-points', input_top_points);
app.use('/submit-top-points', submit_top_points);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
