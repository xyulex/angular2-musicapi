/**
 * Created by Sandeep on 01/06/14.
 */

// Load Our Modules

var express = require('express');
var bodyParser = require('body-parser');
var gigs = require('./routes/gigs');
var mongoose = require('mongoose');

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//connect to our database
//Ideally you will obtain DB details from a config file

var dbName='gigDB';

var connectionString='mongodb://localhost:27017/'+dbName;

mongoose.connect(connectionString);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api', gigs);



module.exports = app;
