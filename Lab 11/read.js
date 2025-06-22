const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017"; // MongoDB server
const client = new MongoClient(uri);


async function read_account() {
  await client.connect();
  const db = client.db("mydb");
  const collection = db.collection("users");

  

  const users = await collection.find().toArray();
  console.log("Users:", users);
  await client.close();
}
read_account();