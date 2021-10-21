const express = require("express");
const morgan = require("morgan");
const app = express();

//logging
app.use(morgan("dev"));

//body parsing
app.use(express.json());

//api routes
app.use("/api", require("/api"));

//static file serving
app.use(express.static(path.join(__dirname, "..", "public")));

//error handling extensions
app.use((req, res, next) => {
  if (this.path.extname(req.path).length) {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  } else {
    next();
  }
});

//index.html sending
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

//final error handling
app.use((error, req, res, next) => {
  console.log(error);
  console.log(error.stack);
  res
    .status(error.status || 500)
    .send(error.message || "Internal Server Error");
});

module.exports = app;
