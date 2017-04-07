'use strict'
require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('express-flash');
const session = require('express-session');
const passport = require('passport');
const knexSessionStore = require('connect-session-knex')(session);
const { knex } = require('./db/database');



const routes = require('./routes/')

//pug configuration
app.set('view engine', 'pug');


app.locals.company = " 🍕🍕🍕 Pizza Shack"
app.locals.body = {}
app.locals.errors = {}
app.locals.body.magic = "Fooooo!"

//middlewares

app.use(cookieParser('secretpizza'));
app.use(session({cookie: {maxAge: 60000, secret: 'secretpizza', resave: true, saveUnitialized: false }}));
app.use(flash());
app.use(bodyParser.urlencoded({extended: false}))
app.use(session({
  store: new knexSessionStore({
    knex,
    tablename: 'sessions'
  }),
  resave: false,
  saveUnitialized: false,
  secret: process.env.SESSION_SECRET || 'pizzashacksupersecretkey'
}));

require('./lib/passport-strategies')
app.use(passport.initialize())
app.use(passport.session())

app.use( (req,res, next) => {
  app.locals.email = req.user && req.user.email
  next()
})


app.use(express.static('public'));
app.use(routes);
app.use((req, res) => {
  res.render('404');
})

// end of the middlewares

const port = process.env.PORT || 3000;
  app.listen(port, ()=> {
  console.log(`listening on port ${port}`);
})
