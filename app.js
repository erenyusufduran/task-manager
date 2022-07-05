const express = require("express");
const tasks = require("./routes/tasks");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

app.listen(PORT, () =>
  console.log(`Server is listening on http://localhost:${PORT}`)
);
