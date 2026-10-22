const mongoose = require('mongoose');
const MONGO_URI = 'mongodb://127.0.0.1:27017/platform';

const connectDB = async () => {
  mongoose.connection.on('disconnected', () => {
    console.log('Mongodb disconnected');
  });

  await mongoose.connect(MONGO_URI);

  console.log('Mongodb connected');
};
