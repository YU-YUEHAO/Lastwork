var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs=require('ejs');

var inquireRouter=require('./routes/inquire');
var indexRouter=require('./routes/index');
var loginRouter=require('./routes/login');
var index2Router=require('./routes/index2');
var basic_tableRouter=require('./routes/basic_table');
var responsive_table=require('./routes/responsive_table')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('.html',ejs.__express);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', loginRouter);
app.use('/inquire',inquireRouter);
app.use('/index',indexRouter);
app.use('/index2',index2Router);
app.use('/basic_Table',basic_tableRouter);
app.use('./')



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
