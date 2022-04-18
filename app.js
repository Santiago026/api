var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const database = require('./config/database');
const auth = require('./auth/main_auth');
const cors = require('cors');

const docentesRouter = require('./routes/docentes.router');
const areasRouter = require('./routes/areas.router');
const agendasRouter = require('./routes/agendas.router');
const novedadesRouter = require('./routes/novedades.router');
const usuariosRouter = require('./routes/usuarios.router');



var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

//MongoDB Connection 
/**Hacemos uso de a función de conexión  */
database.mongoConnect();

app.use('/usuarios', usuariosRouter);
app.use(auth);

// Routes
app.use('/docentes', docentesRouter);
app.use('/areas', areasRouter);
app.use('/agendas', agendasRouter);
app.use('/novedades', novedadesRouter);

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
