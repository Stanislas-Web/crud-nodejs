const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

const apprenantRouters = require('./routes/apprenantRouter');

app.set('views','views');
app.set('view engine','ejs');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/', apprenantRouters);

module.exports = app;