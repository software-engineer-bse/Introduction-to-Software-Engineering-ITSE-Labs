const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017"; // MongoDB server
const client = new MongoClient(uri);

async function create_account() {
  await client.connect();
  const db = client.db("mydb");
  const collection = db.collection("users");

  await collection.insertOne({ username: "Khurram", age: 25 });
  await client.close();

}
create_account()