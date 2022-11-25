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

SRN = 0
let loggedin = false; 
client.connect(()=>{
  const db = client.db('NO-DUE-SYSTEM');
  const student = db.collection('students')
  console.log('Connected successfully to server')
  app.get("/", function(req, res){
    res.render("index");
  });
  app.get("/loginStudent", function(req, res){
    res.render("login",{loginas:"Student",loginID:"SRN",});
  });
  app.post("/loginStudent", function(req, res){
    SRN=parseInt(req.body.loginID);
    password=req.body.password;
    student.findOne({SRN:SRN}).then(function(){
      res.redirect("/student")
    })
  })
  app.get("/loginAdmin", function(req, res){
    res.render("login",{loginas:"Admin",loginID:"Admin ID",});
  });
  app.get("/loginDepartment", function(req, res){
    res.render("login",{loginas:"Department",loginID:"Department ID",});
  });
  app.get("/student", function(req, res){
    res.render("student",{loginas:"Student"})
  })
  app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
})
