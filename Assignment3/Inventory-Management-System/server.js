// Step -1 import express module

const express = require("express");
const { connection } = require("./db");
const { productRouter } = require("./routes/product.route");
const { errorHandler } = require("./middleware/errorHandler.js");
// Step -2 App creation
const app = express();

// Middlewere access req.body ke data ko
app.use(express.json());

app.use("/products", productRouter);
app.use(errorHandler);
// Step -4 Making Routes/ REST API
// API/ Routes

app.get("/", (req, res) => {
  res.send({ msg: "welcome to my app" });
});

// Step - 3 Run application on 8080
app.listen(8080, async () => {
  try {
    await connection;
    console.log("DB Connected");
  } catch (error) {
    console.log(error);
  }
  console.log("server started");
});
