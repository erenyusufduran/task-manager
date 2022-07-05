const mongoose = require("mongoose");

const connectDB = (mongoURL) => {
  return mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
