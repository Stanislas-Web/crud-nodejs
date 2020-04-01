const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const apprenantRouters = require('./routes/apprenantRouter');

mongoose.connect('mongodb://127.0.0.1:27017/apprenantKda',{useNewUrlParser:true,useUnifiedTopology:true},(error)=>{
    if(!error){
        console.log(`La connexion à la base de donnée à reussit`);
    }else{
        console.log(`La connexion à la base de donnée à échouée`);
    }
});

app.set('views','views');
app.set('view engine','ejs');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/', apprenantRouters);

module.exports = app;