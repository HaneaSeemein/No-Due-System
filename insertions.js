const express = require("express");
const app = express();
const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.databaseLink);
client.connect(()=>{
  const db = client.db('NO-DUE-SYSTEM');
  const admin = db.collection('administrator')
  admin.insertOne({ ID: '1111',password: 'owo'})
})
app.listen(3000);