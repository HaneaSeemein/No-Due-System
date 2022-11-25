const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
const client = new MongoClient(process.env.databaseLink);
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let loggedin = false; 
client.connect(()=>{
  const db = client.db('NO-DUE-SYSTEM');
  console.log('Connected successfully to server')
  app.get("/", function(req, res){
    // if (loggedin) {
    res.render("home", {
        startingContent: homeStartingContent,
        posts: posts
      });
    // }
    // else res.redirect("/login");
  });
})