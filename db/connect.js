const mongoose = require("mongoose");

const connectDB = (mongoURL) => {
  return mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
};

module.exports = connectDB;
