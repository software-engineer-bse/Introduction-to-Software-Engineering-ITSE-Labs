const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017"; // MongoDB server
const client = new MongoClient(uri);

async function delete_account() {
  await client.connect();
  const db = client.db("mydb");
  const collection = db.collection("users");

  await collection.deleteOne({ username: "Khurram" });
  await client.close();

}
delete_account()