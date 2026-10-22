const { MongoClient } = require('mongodb');


async function main() {
  const client = new MongoClient(MONGO_URI, { serverSelectionTimeoutMS: 5000 });

  try {
    await client.connect();
    const db = client.db();

    const pong = await db.command({ ping: 1 });
    console.log('Connected to database', db.databaseName);

    console.log('ping', pong);
    const courses = client.db().collection('courses');
    await courses.updateOne(
      { title: 'JavaScript Foundations' },
      { $set: { price: 199 } },
    );

    console.log(await courses.find({}).toArray());
  } finally {
    await client.close();
  }
}

main().catch((err) => {
  console.log(err);
  process.exit(1);
});

let client = null;
const getClient = () => {
  if (!client) {
    client = new MongoClient(MONGO_URI);
  }

  return client;
};
