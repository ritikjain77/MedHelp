const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Userroute = require("./routes/Userroute");
const path = require("path");
//const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use("/users", Userroute);
// app.use(
//   "/api",
//   createProxyMiddleware({
//     target: "http://localhost:5000",
//     changeOrigin: true,
//   })
// );

app.use(express.static(path.join(__dirname, "frontend", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else console.log("connected to db");
  }
);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is listening on port: 5000");
});