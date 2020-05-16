const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", function (req, res, next) {
  res.send("hello from nodejs/express");
});

app.listen(8080, function () {
  console.log("CORS-enabled web server listening on port 8080");
});
