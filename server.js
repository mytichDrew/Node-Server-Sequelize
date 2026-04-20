const express = require("express");
const bodyParser = require("body-parser");
const studentRoute = require("./routes/student.route");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/students", studentRoute);

app.get("/", (req, res) => {
  res.send("Server running...");
});

const port = 3000;
app.listen(port, () => {
  console.log("Server jalan di port " + port);
});