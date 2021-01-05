require('dotenv').config(); //dotenv套件使用.env還境變數
const MongoClient = require('mongodb').MongoClient;

const uri = process.env["MONGO_CONNECTION_STRING"];
console.log(uri)
const client = new MongoClient(uri,{ useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err,db) => {
    // const collection = client.db("SVGICONS").collection("icons");
    var dbo = db.db("SVGICONS");
    // var query = { address: "Park Lane 38" };
    dbo.collection("icons").find().toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
    // perform actions on the collection object
  });