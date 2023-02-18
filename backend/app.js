// server start: nodemon app.js

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const mongoose = require('mongoose');
const app = express();
const passport = require('passport');
const cors = require("cors")
// load routes
const todos = require('./routes/todos');

// passport config

// db config
const db = require('./config/database');

// connect to mongoose
mongoose.connect(db.mongoURI).then(() => {
  console.log('MongoDB connected...');
}).catch(err => {
  console.log(err);
});

// body parser middleware
// - parse application/x-www-form-urlencoded
// - parse application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// method override
app.use(methodOverride('_method'));

// express session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true

}));

// add passport middleware
// it is very important to add this after the express session
app.use(passport.initialize());
app.use(passport.session());

// flash
app.use(flash());


// Global variables
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg'); 
  res.locals.error_msg = req.flash('error_msg');     
  res.locals.error = req.flash('error');             
  res.locals.user = req.user || null;                // needed for passport login/logout to work
  next();
})

// use routes
app.use('/todos', todos);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
