const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017"; // MongoDB server
const client = new MongoClient(uri);

async function update_account() {
  await client.connect();
  const db = client.db("mydb");
  const collection = db.collection("users");

  let update = await collection.updateOne({ username: "Khurram" }, { $set: { age: 26 } });
  console.log(update);
  await client.close();

}
update_account();