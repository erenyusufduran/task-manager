const express = require("express");
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

app.use("/api/v1/tasks", tasks);

app.use(notFound);

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () =>
      console.log(`Server is listening on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
