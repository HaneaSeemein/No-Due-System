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
dID=''
dname=''
aID=''
SRN = ''
let loggedin = false; 
client.connect(()=>{
  const db = client.db('NO-DUE-SYSTEM');
  const student = db.collection('students')
  const dues = db.collection('dues')
  const Department = db.collection('department')
  const admin = db.collection('administrator')
  // admin.insertOne({ ID: '1111',password: 'owo'})
  // Department.insertOne({D_ID:"2022BTE",name:"Bio Technology",password:"btbtbt"})
  
  console.log('Connected successfully to server')
  app.get("/", function(req, res){
    res.render("index");
  });
  app.get("/loginStudent", function(req, res){
    res.render("login",{loginas:"Student",loginID:"SRN",});
  });
  app.post("/loginStudent", function(req, res){
    SRN=req.body.loginID;
    password=req.body.pwd;
    student.findOne({SRN:SRN}).then(function(profile){
      if(profile.Password==password){
        loggedin = true;
        res.redirect("/student");}
    })
  })
  app.get("/loginDepartment", function(req, res){
    res.render("login",{loginas:"Department",loginID:"Department ID",});
  });
  app.post("/loginDepartment", function(req, res){
    dID=req.body.loginID;
    password=req.body.pwd;
    Department.findOne({D_ID:dID}).then(function(profile){
      if(profile.password==password){
        loggedin = true;
        dname=profile.name
        res.redirect("/department");}
    })
  })
  app.get("/loginAdmin", function(req, res){
    res.render("login",{loginas:"Admin",loginID:"Admin ID",});
  });
  app.post("/loginAdmin", function(req, res){
    aID=req.body.loginID;
    password=req.body.pwd;
    admin.findOne({ID:aID}).then(function(profile){
      if(profile.password==password){
        loggedin = true;
        res.redirect("/admin");}
    })
  })
  app.get("/student", function(req, res){
    sdues = [];
    if(loggedin){
      dues.find({SRN:SRN}).forEach(function(due){
        sdues.push(due)
      }).then(function(){res.render("student",{dues:sdues})})
    }
    else{res.redirect("/")}
  })
  app.post("/student", function(req, res){res.redirect("/")})
  app.get("/department", function(req, res){
    if(loggedin){res.render("department")}
    else{res.redirect("/")}
  })
  app.post("/department", function(req, res){
    SRN = req.body.SRN;
    Amount = req.body.amt;
    For=req.body.purpose;
    dues.insertOne({SRN:SRN,Amount:Amount,Purpose:For,Department:dname}).then(res.redirect("/department"))
  })
  app.get("/department_update", function(req, res){
    if(loggedin){res.render("department_update")}
    else{res.redirect("/")}
  })
  thedues = [];
  app.post("/department_update", function(req, res){
    SRN=req.body.SRN;
    dues.find({SRN:SRN,Department:dname}).forEach(function(due){
      thedues.push(due)
    }).then(function(){res.redirect("department_update2")})
  })
  app.get("/department_update2", function(req, res){
    if(loggedin){
     res.render(res.render("department_update2",{dues:thedues,SRN:SRN}));
     thedues=[]
    }
    else{res.redirect("/")}
  })
  app.post("/department_update2", function(req, res){
    amountpaid=req.body.paid;
    amountpaid.forEach(function(amount){
      dues.delete({amount:amount})
    })
  })
  app.get("/admin", function(req, res){
    if(loggedin){res.render("admin_register")}
    else{res.redirect("/")}
  })
  app.get("/admin_delete", function(req, res){
    if(loggedin){res.render("admin_delete")}
    else{res.redirect("/")}
  })
  app.post("/admin", function(req, res){
    SRN = req.body.SRN;
    Password = req.body.pwd;
    Name=req.body.name;
    student.insertOne({SRN:SRN,Name:Name,Password:Password}).then(res.redirect("/admin"));
  })
  app.post("/admin_delete", function(req, res){
    SRN = req.body.SRN;
    student.deleteOne({SRN:SRN}).then(res.redirect("/admin"));
  })
  app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
})
