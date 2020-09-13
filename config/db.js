const mongoose = require('mongoose');
const config = require('config');

// Database link
const db = config.get('mongoURI');

// code to connect to database
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useNewUrlParser: true,
    });
    console.log('MongoDB connected successfully.....');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

// export to make it accessiblr
module.exports = connectDB;
