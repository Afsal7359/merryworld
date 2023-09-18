var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var AdminRouter = require('./routes/adminrouter')
var expressEjsLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const dotenv=require('dotenv')

var usersRouter = require('./routes/usersrouter');

var app = express();
dotenv.config();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(expressEjsLayouts)
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', AdminRouter);
app.use('/', usersRouter);



// console.log(process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL).then(()=>{
  console.log("Database connected");
  }).catch((error)=>{
    console.log(`database connection error${error}`);
  })
  
  


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
  res.status(err.status || 500);
 
    res.render('error')
  
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;