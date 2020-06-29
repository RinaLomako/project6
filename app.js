// connection EXPRESS
var express = require('express');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require ('body-parser')
var logger = require('morgan');
var mongoose = require('mongoose');

// ROUTES
var adminRouter = require('./routes/admin');
var indexRouter = require('./routes/index');
var newplaceRouter = require('./routes/newplace');
var place_detailsRouter = require('./routes/place_details');
var userRouter = require('./routes/user');
var newplaceRouter = require('./routes/newplace');
var signupRouter = require('./routes/signup');

// app object creation
var app = express();

// VIEW ENGINE SETUP
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//acceder a fichier en interieur
app.use(express.static(path.join(__dirname, 'public')));

//demande est envoyée au serveur
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/admin', adminRouter);
app.use('/newplace', newplaceRouter);
app.use('/place_details', place_detailsRouter);
app.use('/signup', signupRouter);

//acceder a BDD Mongoose
mongoose.connect('mongodb+srv://user1:blurblur2020@cluster0-wannv.mongodb.net/project6?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  // const MongoClient = require('mongodb').MongoClient;
  // const uri = "mongodb+srv://Katerina:<blurblur2020>@cluster0-inrzj.mongodb.net/<dbname>?retryWrites=true&w=majority";
  // const client = new MongoClient(uri, { useNewUrlParser: true });
  // client.connect(err => {
  //   const collection = client.db("test").collection("devices");
  //   // perform actions on the collection object
  //   client.close();
  // });

// error 404 handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
