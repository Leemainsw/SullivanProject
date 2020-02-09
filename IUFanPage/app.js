const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const fs = require("fs");
const multer = require("multer");
const http = require("http");
//const IO = require("soket.io")(server);

const axios = require("axios");
const async = require("async");

const app = express();

app.listen(85, function(){
    console.log("Server started!");
});

app.set('viwes', __dirname + "/views");
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const router = require('./router')(app, fs, multer, axios, async);


