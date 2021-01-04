const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://admin:andy798978@cluster0.pkruc.mongodb.net/SVGICONS?retryWrites=true&w=majority";
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